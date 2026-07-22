import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ShieldCheck, UserCheck, AlertCircle, Loader2 } from "lucide-react";
import { Input, Button, Card } from "../components/UI";
import { teamService } from "../services/teamService";

export const AcceptInvite: React.FC = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token") || "";
  const navigate = useNavigate();

  const [invitationDetails, setInvitationDetails] = useState<{
    email: string;
    tenantName: string;
    role: string;
    isExpired: boolean;
  } | null>(null);

  const [isLoadingDetails, setIsLoadingDetails] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    password: string;
    firstName?: string;
    lastName?: string;
  }>();

  useEffect(() => {
    if (!token) {
      setError("No invitation token provided.");
      setIsLoadingDetails(false);
      return;
    }

    teamService
      .getPublicInviteDetails(token)
      .then((res) => {
        if (res.success && res.data) {
          setInvitationDetails(res.data);
          if (res.data.isExpired) {
            setError("This invitation token has expired or has already been accepted.");
          }
        }
      })
      .catch(() => {
        setError("Invalid or expired invitation token.");
      })
      .finally(() => {
        setIsLoadingDetails(false);
      });
  }, [token]);

  const onSubmit = async (data: { password: string; firstName?: string; lastName?: string }) => {
    setIsSubmitting(true);
    setError(null);
    try {
      await teamService.acceptInvite({
        token,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
      });
      navigate("/");
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || "Failed to accept invitation.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoadingDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-zinc-950">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-zinc-950 dark:to-zinc-900 p-4">
      <Card className="w-full max-w-md p-8 shadow-xl bg-card border border-border/80">
        <div className="flex flex-col items-center text-center mb-6">
          <div className="h-12 w-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mb-3 shadow-lg shadow-primary/20">
            <ShieldCheck className="w-6 h-6 stroke-[2]" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Accept Workspace Invitation</h1>
          {invitationDetails && (
            <p className="text-sm text-muted-foreground mt-1.5">
              You're invited to join <span className="font-semibold text-foreground">{invitationDetails.tenantName}</span> as <span className="font-semibold text-primary">{invitationDetails.role}</span> ({invitationDetails.email})
            </p>
          )}
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive flex items-start gap-3 text-sm">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {!invitationDetails?.isExpired && (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="First Name"
                type="text"
                placeholder="Jane"
                {...register("firstName")}
              />
              <Input
                label="Last Name"
                type="text"
                placeholder="Doe"
                {...register("lastName")}
              />
            </div>

            <Input
              label="Set Password"
              type="password"
              placeholder="Min 8 chars (UPPER, lower, number, special)"
              error={errors.password?.message}
              {...register("password", {
                required: "Password is required",
                minLength: { value: 8, message: "Password must be at least 8 characters" },
              })}
            />

            <Button type="submit" className="w-full h-11 mt-2" loading={isSubmitting}>
              <UserCheck className="w-4 h-4 mr-2" />
              Accept Invitation & Set Password
            </Button>
          </form>
        )}
      </Card>
    </div>
  );
};

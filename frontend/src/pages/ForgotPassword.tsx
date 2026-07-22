import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { KeyRound, Mail, AlertCircle, CheckCircle2, ArrowLeft } from "lucide-react";
import { Input, Button, Card } from "../components/UI";
import { authService } from "../services/authService";

export const ForgotPassword: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [devResetLink, setDevResetLink] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string; tenantSlug?: string }>();

  const onSubmit = async (data: { email: string; tenantSlug?: string }) => {
    setIsLoading(true);
    setError(null);
    setSuccess(null);
    setDevResetLink(null);

    try {
      const res = await authService.forgotPassword(data);
      setSuccess("If an account matches that email, a password reset link has been generated.");
      if (res.devResetLink) {
        setDevResetLink(res.devResetLink);
      }
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || "Failed to process password reset request.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-zinc-950 dark:to-zinc-900 p-4">
      <Card className="w-full max-w-md p-8 shadow-xl bg-card border border-border/80">
        <div className="flex flex-col items-center text-center mb-6">
          <div className="h-12 w-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mb-3 shadow-lg shadow-primary/20">
            <KeyRound className="w-6 h-6 stroke-[2]" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Forgot Password</h1>
          <p className="text-sm text-muted-foreground mt-1.5">
            Enter your email to receive a password reset link
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive flex items-start gap-3 text-sm">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div className="mb-6 p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/50 text-emerald-900 dark:text-emerald-300 flex items-start gap-3 text-sm">
            <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
            <div>
              <p>{success}</p>
              {devResetLink && (
                <div className="mt-3 p-3 bg-card border rounded font-mono text-xs break-all">
                  <p className="font-semibold text-foreground mb-1">Dev Environment Reset Link:</p>
                  <a href={devResetLink} className="text-primary underline">
                    {devResetLink}
                  </a>
                </div>
              )}
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            label="Email Address"
            type="email"
            placeholder="user@organization.com"
            error={errors.email?.message}
            {...register("email", { required: "Email is required" })}
          />

          <Input
            label="Workspace / Tenant Slug (Optional)"
            type="text"
            placeholder="acme-corp"
            {...register("tenantSlug")}
          />

          <Button type="submit" className="w-full h-11 mt-2" loading={isLoading}>
            <Mail className="w-4 h-4 mr-2" />
            Send Reset Link
          </Button>

          <div className="pt-4 border-t text-center text-sm">
            <Link to="/login" className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Sign In
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
};

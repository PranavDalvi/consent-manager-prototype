import React, { useState } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Lock, CheckCircle2, AlertCircle } from "lucide-react";
import { Input, Button, Card } from "../components/UI";
import { authService } from "../services/authService";

export const ResetPassword: React.FC = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token") || "";
  const navigate = useNavigate();

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ newPassword: string }>();

  const onSubmit = async (data: { newPassword: string }) => {
    if (!token) {
      setError("Missing reset token");
      return;
    }

    setIsLoading(true);
    setError(null);
    try {
      await authService.resetPassword({ token, newPassword: data.newPassword });
      setSuccess(true);
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || "Failed to reset password.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-zinc-950 dark:to-zinc-900 p-4">
      <Card className="w-full max-w-md p-8 shadow-xl bg-card border border-border/80">
        <div className="flex flex-col items-center text-center mb-6">
          <div className="h-12 w-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mb-3 shadow-lg shadow-primary/20">
            <Lock className="w-6 h-6 stroke-[2]" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Reset Password</h1>
          <p className="text-sm text-muted-foreground mt-1.5">
            Enter your new password below
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive flex items-start gap-3 text-sm">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {success ? (
          <div className="text-center space-y-4">
            <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/50 text-emerald-900 dark:text-emerald-300 flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Password reset successfully! All existing sessions have been logged out.</span>
            </div>
            <Button onClick={() => navigate("/login")} className="w-full">
              Go to Sign In
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input
              label="New Password"
              type="password"
              placeholder="Min 8 chars with UPPER, lower, number, special"
              error={errors.newPassword?.message}
              {...register("newPassword", {
                required: "New password is required",
                minLength: { value: 8, message: "Password must be at least 8 characters" },
              })}
            />

            <Button type="submit" className="w-full h-11 mt-2" loading={isLoading}>
              Reset Password
            </Button>

            <div className="pt-4 border-t text-center text-sm">
              <Link to="/login" className="text-muted-foreground hover:text-foreground">
                Cancel and back to Sign In
              </Link>
            </div>
          </form>
        )}
      </Card>
    </div>
  );
};

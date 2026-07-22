import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Lock, LogIn, AlertCircle } from "lucide-react";
import { Input, Button, Card } from "../components/UI";
import { authService } from "../services/authService";

export const Login: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string; password: string; tenantSlug?: string }>();

  const onSubmit = async (data: { email: string; password: string; tenantSlug?: string }) => {
    setIsLoading(true);
    setError(null);
    try {
      await authService.login(data);
      navigate("/");
    } catch (err: any) {
      const msg = err.response?.data?.message || err.message || "Login failed. Please check your credentials.";
      setError(msg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-zinc-950 dark:to-zinc-900 p-4">
      <Card className="w-full max-w-md p-8 shadow-xl bg-card border border-border/80">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="h-12 w-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mb-4 shadow-lg shadow-primary/20">
            <Lock className="w-6 h-6 stroke-[2]" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Tenant Portal Login</h1>
          <p className="text-sm text-muted-foreground mt-1.5">
            Sign in to manage policies, consents, team, and security settings
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive flex items-start gap-3 text-sm">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            label="Email Address"
            type="email"
            placeholder="user@organization.com"
            error={errors.email?.message}
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
            })}
          />

          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            error={errors.password?.message}
            {...register("password", {
              required: "Password is required",
            })}
          />

          <Input
            label="Workspace / Tenant Slug (Optional)"
            type="text"
            placeholder="acme-corp"
            error={errors.tenantSlug?.message}
            {...register("tenantSlug")}
          />

          <div className="flex items-center justify-between text-sm py-1">
            <Link to="/forgot-password" className="text-primary hover:underline text-xs font-medium">
              Forgot password?
            </Link>
          </div>

          <Button type="submit" className="w-full h-11 mt-2" loading={isLoading}>
            <LogIn className="w-4 h-4 mr-2" />
            Sign In
          </Button>

          <div className="pt-4 border-t text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link to="/register" className="text-primary font-semibold hover:underline">
              Create a workspace
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
};

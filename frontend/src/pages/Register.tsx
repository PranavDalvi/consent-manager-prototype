import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Building2, UserPlus, AlertCircle } from "lucide-react";
import { Input, Button, Card } from "../components/UI";
import { authService } from "../services/authService";

export const Register: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    tenantName: string;
    slug: string;
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
  }>();

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    setError(null);
    try {
      await authService.register(data);
      navigate("/");
    } catch (err: any) {
      const msg =
        err.response?.data?.message || err.message || "Registration failed. Please check inputs.";
      setError(msg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-zinc-950 dark:to-zinc-900 p-4">
      <Card className="w-full max-w-lg p-8 shadow-xl bg-card border border-border/80">
        <div className="flex flex-col items-center text-center mb-6">
          <div className="h-12 w-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mb-3 shadow-lg shadow-primary/20">
            <Building2 className="w-6 h-6 stroke-[2]" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Create Tenant Workspace</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Register your organization and Owner administrator account
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive flex items-start gap-3 text-sm">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Organization Name"
              type="text"
              placeholder="Acme Inc"
              error={errors.tenantName?.message}
              {...register("tenantName", { required: "Organization name is required" })}
            />

            <Input
              label="Workspace Slug"
              type="text"
              placeholder="acme-inc"
              error={errors.slug?.message}
              {...register("slug", {
                required: "Slug is required",
                pattern: {
                  value: /^[a-z0-9-]+$/,
                  message: "Lowercase letters, numbers, and hyphens only",
                },
              })}
            />
          </div>

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
            label="Owner Email Address"
            type="email"
            placeholder="admin@acme.com"
            error={errors.email?.message}
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
            })}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Min 8 chars with UPPER, lower, number, & special char"
            error={errors.password?.message}
            {...register("password", {
              required: "Password is required",
              minLength: { value: 8, message: "Password must be at least 8 characters" },
            })}
          />

          <Button type="submit" className="w-full h-11 mt-4" loading={isLoading}>
            <UserPlus className="w-4 h-4 mr-2" />
            Create Workspace & Account
          </Button>

          <div className="pt-4 border-t text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-primary font-semibold hover:underline">
              Sign In
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
};

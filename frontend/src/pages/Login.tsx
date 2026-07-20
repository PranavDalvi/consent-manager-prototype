import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Key, Lock, AlertCircle } from "lucide-react";
import { Input, Button, Card } from "../components/UI";
import { API_KEY_STORAGE_KEY } from "../services/apiClient";

export const Login: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ apiKey: string }>();

  const onSubmit = async (data: { apiKey: string }) => {
    setIsLoading(true);
    setError(null);
    try {
      // Validate that the key works by hitting the policies endpoint or simple test endpoint
      const response = await fetch("/api/policies", {
        headers: {
          "X-API-Key": data.apiKey,
        },
      });

      if (response.ok) {
        localStorage.setItem(API_KEY_STORAGE_KEY, data.apiKey);
        navigate("/");
      } else {
        const errorData = await response.json().catch(() => ({}));
        setError(errorData.message || "Invalid API key. Please check and try again.");
      }
    } catch (err) {
      setError("Unable to connect to the server. Please check your connection.");
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
          <h1 className="text-2xl font-bold tracking-tight">Tenant Console</h1>
          <p className="text-sm text-muted-foreground mt-1.5">
            Enter your API Key to access the Consent Manager console
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive flex items-start gap-3 text-sm">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <Input
            label="API Key"
            type="password"
            placeholder="X-API-Key..."
            error={errors.apiKey?.message}
            {...register("apiKey", {
              required: "API Key is required to login",
              minLength: { value: 5, message: "API Key must be at least 5 characters" },
            })}
          />

          <Button type="submit" className="w-full h-11" loading={isLoading}>
            <Key className="w-4 h-4" />
            Authenticate
          </Button>
        </form>
      </Card>
    </div>
  );
};

import React, { useState, useEffect } from "react";
import { Building, ShieldCheck, Save, CheckCircle2 } from "lucide-react";
import { Card, Button, Input, Badge } from "../components/UI";
import { authService, type UserProfile } from "../services/authService";

export const Settings: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [, setIsLoading] = useState(true);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    authService
      .getMe()
      .then((res) => {
        if (res.success) setProfile(res.data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Tenant Settings</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Configure organization settings and security preferences
        </p>
      </div>

      {isSaved && (
        <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 text-emerald-900 dark:text-emerald-300 flex items-center gap-3 text-sm">
          <CheckCircle2 className="w-5 h-5 shrink-0" />
          <span>Tenant settings saved successfully!</span>
        </div>
      )}

      {profile && (
        <form onSubmit={handleSave} className="space-y-6">
          <Card className="p-6 border border-border/80 shadow-sm space-y-4">
            <div className="flex items-center gap-3 border-b border-border pb-4">
              <Building className="w-5 h-5 text-primary" />
              <div>
                <h3 className="font-semibold text-base">Organization Information</h3>
                <p className="text-xs text-muted-foreground">General workspace parameters</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Tenant Name"
                type="text"
                defaultValue={profile.tenant.name}
                disabled
              />
              <Input
                label="Workspace Slug"
                type="text"
                defaultValue={profile.tenant.slug}
                disabled
              />
            </div>

            <div className="pt-2">
              <label className="text-sm font-medium">Tenant Status</label>
              <div className="mt-1">
                <Badge variant={profile.tenant.status === "ACTIVE" ? "success" : "destructive"}>
                  {profile.tenant.status}
                </Badge>
              </div>
            </div>
          </Card>

          <Card className="p-6 border border-border/80 shadow-sm space-y-4">
            <div className="flex items-center gap-3 border-b border-border pb-4">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <div>
                <h3 className="font-semibold text-base">Security Policy Defaults</h3>
                <p className="text-xs text-muted-foreground">Authentication and session policies</p>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/40 border border-border">
                <div>
                  <p className="font-medium text-foreground">JWT Access Token Expiration</p>
                  <p className="text-xs text-muted-foreground">Short-lived access tokens</p>
                </div>
                <Badge variant="outline" className="font-mono">15 Minutes</Badge>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/40 border border-border">
                <div>
                  <p className="font-medium text-foreground">Refresh Token Session Expiration</p>
                  <p className="text-xs text-muted-foreground">HttpOnly cookie rotation policy</p>
                </div>
                <Badge variant="outline" className="font-mono">7 Days</Badge>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/40 border border-border">
                <div>
                  <p className="font-medium text-foreground">Account Lockout Policy</p>
                  <p className="text-xs text-muted-foreground">Failed login attempt threshold</p>
                </div>
                <Badge variant="outline" className="font-mono">5 Attempts (15m Lock)</Badge>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <Button type="submit">
                <Save className="w-4 h-4 mr-2" /> Save Changes
              </Button>
            </div>
          </Card>
        </form>
      )}
    </div>
  );
};

export enum UserRole {
  CLIENT_ADMIN = 'client_admin',
  ASSOCIATES_ADMIN = 'associates_admin',
  FIRM_ADMIN = 'firm_admin',
}

export interface AuthUser {
  id: string;
  role: UserRole;
  firmId: string;
  email?: string;
  name?: string;
}

export const RolePermissions = {
  [UserRole.CLIENT_ADMIN]: [
    'view_own_clients', 'manage_own_matters', 'upload_documents',
    'view_own_billing', 'manage_client_contacts', 'view_own_reports'
  ],
  [UserRole.ASSOCIATES_ADMIN]: [
    'view_all_associates', 'manage_associate_profiles', 'assign_matters',
    'view_team_performance', 'approve_time_entries', 'manage_assignments'
  ],
  [UserRole.FIRM_ADMIN]: [
    'view_all_clients', 'manage_all_matters', 'manage_all_users',
    'firm_settings', 'billing_overview', 'financial_reports',
    'system_audit_logs', 'delete_records', 'manage_firm_billing',
    'view_all_reports'
  ]
} as const;

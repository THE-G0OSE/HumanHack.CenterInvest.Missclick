export const FETCH_TYPES = {
  REGISTER: "register",
  LOGIN: "login",
  SEND_EMAIL_CODE: "send_email_code",
  VERIFY_EMAIL: "verify_email",
  VERIFY_2FA: "verify_2fa",
  PASSWORD_RECOVERY: "password_recovery",
  POST_PROJECT: "post_project",
  GET_PROJECTS: "get_projects",
  GET_PROJECT: "get_project",
  PATCH_PROJECT: "patch_project",
  DELETE_PROJECT: "delete_project",
  GET_ME: 'get_me',
};

export const fetchQuery: Record<
  (typeof FETCH_TYPES)[keyof typeof FETCH_TYPES],
  string
> = {
  [FETCH_TYPES.LOGIN]: "/auth/login",
  [FETCH_TYPES.REGISTER]: "/auth/register",
  [FETCH_TYPES.SEND_EMAIL_CODE]: "/auth/register-send-email-verification",
  [FETCH_TYPES.VERIFY_EMAIL]: "/auth/register-verify-email",
  [FETCH_TYPES.VERIFY_2FA]: "/auth/2fa",
  [FETCH_TYPES.PASSWORD_RECOVERY]: "/auth/password/recovery",
  [FETCH_TYPES.POST_PROJECT]: "/projects",
  [FETCH_TYPES.GET_PROJECT]: "/projects/",
  [FETCH_TYPES.GET_PROJECTS]: "/projects",
  [FETCH_TYPES.PATCH_PROJECT]: "/projects/",
  [FETCH_TYPES.DELETE_PROJECT]: "/projects/",
  [FETCH_TYPES.GET_ME]: '/users/get_me'
};

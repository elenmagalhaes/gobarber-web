interface Errors {
  [key: string]: string;
}

export default function getValitationErrors(err: any): Errors {
  const validationErrors: Errors = {};

  err.inner.forEach((error: any) => {
    validationErrors[error.path] = error.message;
    return validationErrors;
  });

  return validationErrors;
}

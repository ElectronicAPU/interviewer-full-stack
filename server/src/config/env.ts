export const require = (name: string) => {
  const value = process.env[name];
  if (!value) {
    console.error("Missing" + value + "in .env");
    process.exit(1)
  }

  return value;
};

export const env = {
  DATABASE_URL: require("DATABASE_URL"),
  OLLAMA_URL: process.env.OLLAMA_URL || "http://localhost:5123",
  OLLAMA_MODEL: process.env.OLLAMA_MODEL || "qwen3:8b",
  WEB_ORIGIN: process.env.WEB_ORIGIN || "http://localhost:3000",
  PORT: process.env.PORT || "4000",
  JWT_SECRET: process.env.JWT_SECRET || "",
};

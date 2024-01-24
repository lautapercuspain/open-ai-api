-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "next_auth";

-- CreateTable
CREATE TABLE "public"."CheckoutSessions" (
    "id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "checkoutURL" VARCHAR(500) NOT NULL,
    "confirmed" BOOLEAN NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "credits" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CheckoutSessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "next_auth"."accounts" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" BIGINT,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    "oauth_token_secret" TEXT,
    "oauth_token" TEXT,
    "userId" UUID,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "next_auth"."sessions" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "expires" TIMESTAMPTZ(6) NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" UUID,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "next_auth"."users" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMPTZ(6),
    "image" TEXT,
    "isPremium" BOOLEAN NOT NULL DEFAULT false,
    "subscriptionId" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "next_auth"."verification_tokens" (
    "identifier" TEXT,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "verification_tokens_pkey" PRIMARY KEY ("token")
);

-- CreateIndex
CREATE UNIQUE INDEX "provider_unique" ON "next_auth"."accounts"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "sessiontoken_unique" ON "next_auth"."sessions"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "email_unique" ON "next_auth"."users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "token_identifier_unique" ON "next_auth"."verification_tokens"("token", "identifier");

-- AddForeignKey
ALTER TABLE "next_auth"."accounts" ADD CONSTRAINT "accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "next_auth"."users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "next_auth"."sessions" ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "next_auth"."users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

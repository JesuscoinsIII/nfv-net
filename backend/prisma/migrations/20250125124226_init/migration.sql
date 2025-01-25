-- CreateTable
CREATE TABLE "Volunteer" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "trip_name" TEXT NOT NULL,
    "date_of_trip" TIMESTAMP(3) NOT NULL,
    "meetpoint_address" TEXT NOT NULL,
    "duration_hours" INTEGER NOT NULL,
    "number_of_people" INTEGER NOT NULL,
    "vehicle_type" TEXT NOT NULL,
    "additional_details" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "wallet_address" TEXT NOT NULL,
    "event_interests" TEXT NOT NULL,
    "demographics" JSONB NOT NULL,

    CONSTRAINT "Volunteer_pkey" PRIMARY KEY ("id")
);

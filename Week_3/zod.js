const zod = require("zod");

const userSchema = zod.object({
  email: zod.string().email({ message: "Invalid email address" }),
  password: zod.string().min(8, { message: "Password must be at least 8 characters long" }),
});

// Example of how to use the schema for validation
const dataToValidate = {
  email: "test@example.com",
  password: "mysecretpassword",
};

const result = userSchema.safeParse(dataToValidate);

if (result.success) {
  console.log("Validation successful:", result.data);
} else {
  console.log("Validation failed:", result.error.errors);
}



// ---------------------------------------------------------------------------------------------------


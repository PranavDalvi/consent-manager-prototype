import readline from "readline";
import bcrypt from "bcryptjs";
import { prisma } from "../../db/prisma";

function askQuestion(query: string, hideInput = false): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    if (hideInput) {
      // Basic prompt for interactive terminal
      process.stdout.write(query);
      let input = "";
      const onData = (char: Buffer) => {
        const str = char.toString("utf8");
        switch (str) {
          case "\n":
          case "\r":
          case "\u0004":
            process.stdin.removeListener("data", onData);
            process.stdout.write("\n");
            rl.close();
            resolve(input);
            break;
          case "\u0003": // Ctrl+C
            process.exit();
            break;
          default:
            input += str;
            break;
        }
      };
      process.stdin.on("data", onData);
    } else {
      rl.question(query, (answer) => {
        rl.close();
        resolve(answer.trim());
      });
    }
  });
}

export async function createSuperAdminCli(): Promise<void> {
  console.log("\n=================================");
  console.log(" Super Admin Bootstrapping CLI ");
  console.log("=================================\n");

  try {
    const email = await askQuestion("Enter Email: ");

    if (!email || !email.includes("@")) {
      console.error("❌ Error: A valid email address is required.");
      process.exit(1);
    }

    const existing = await prisma.superAdmin.findUnique({ where: { email } });
    if (existing) {
      console.error(`❌ Error: Super Admin with email "${email}" already exists.`);
      process.exit(1);
    }

    const name = await askQuestion("Enter Name (optional): ");

    const password = await askQuestion("Enter Password: ", true);
    if (!password || password.length < 8) {
      console.error("❌ Error: Password must be at least 8 characters long.");
      process.exit(1);
    }

    const confirmPassword = await askQuestion("Confirm Password: ", true);
    if (password !== confirmPassword) {
      console.error("❌ Error: Passwords do not match.");
      process.exit(1);
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const admin = await prisma.superAdmin.create({
      data: {
        email,
        name: name || "Super Admin",
        passwordHash,
        role: "SUPER_ADMIN",
        isActive: true,
      },
    });

    console.log("\n=================================");
    console.log(" ✅ Super Admin created successfully!");
    console.log(` ID: ${admin.id}`);
    console.log(` Email: ${admin.email}`);
    console.log("=================================\n");
  } catch (error) {
    console.error("❌ Failed to create Super Admin:", error);
  } finally {
    await prisma.$disconnect();
    process.exit(0);
  }
}

if (require.main === module) {
  createSuperAdminCli();
}

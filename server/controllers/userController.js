//APi controller function to manage clerk with database
import { Webhook } from "svix";
import userModel from "../models/userModel.js";
//http://localhost:3000/api/user/webhooks
const clerkWebHooks = async (req, res) => {
  try {
    const { body } = req;
    console.log("Webhook body", body);
    console.log("Webhook headers", req.headers);    
    const sig = req.headers["svix-signature"];
    const webhook = new Webhook(process.env.CLERK_WEBHOOK_API_KEY);
    const event = await webhook.verify(JSON.stringify(body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": sig,
    });
    const { type, data } = req.body;
    switch (type) {
      case "user.created": {
        console.log("User created", data);
        const userData = {
          clerkId: data.id,
          firstName: data.first_name,
          lastName: data.last_name,
          email: data.email_addresses[0].email_address,
          image: data.profile_image_url,
          status: data.status,
          createdAt: data.created_at,
        };
        await userModel.create(userData);
        res.json({ message: "User created" });
        break;
      }

      case "user.updated": {
        const userData = {
          firstName: data.first_name,
          lastName: data.last_name,
          email: data.email_addresses[0].email_address,
          image: data.profile_image_url,
          status: data.status,
          createdAt: data.created_at,
        };
        await userModel.findOneAndUpdate({ clerkId: data.id }, userData, {
          new: true,
        });
        res.json({ message: "User updated" });
        console.log("User updated", data);
        break;
      }

      case "user.deleted": {
        await userModel.findOneAndDelete({ clerkId: data.id });
        res.json({ message: "User deleted" });
        console.log("User deleted", data);
        break;
      }

      default:
        console.log("Unknown event type");
    }
    console.log(event);
    res.status(200).json({ message: "Webhook received" });
  } catch (err) {
    console.log(err);
    res.json({ message: "Error in webhook" });
    res.status(500).json({ message: "Internal server error" });
  }
};

export { clerkWebHooks };

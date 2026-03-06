import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import contactusRoutes from "./router/contactus.router.js"
import contactInfoRoutes from "./router/contactinfo.router.js"
import userRoutes from "./router/user.router.js"
import blogCatRoutes from "./router/blog.category.router.js"
import blogTagRoutes from "./router/blog.tag.router.js"
import blogRoutes from "./router/blog.router.js"
import blogCommentRoutes from "./router/blog.comment.router.js"
import faqRoutes from "./router/faq.router.js"
import partnerRoutes from "./router/partner.router.js"
import galleryRoutes from "./router/gallery.router.js"
import coreTeamRoutes from "./router/core_team.router.js"
import gamingTeamRoutes from "./router/gaming.team.router.js"
import playerRoutes from "./router/player.router.js"

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use("/api/contactus",contactusRoutes);
app.use("/api/contactInfo",contactInfoRoutes);

app.use("/api/faq", faqRoutes);
app.use("/api/partner", partnerRoutes);
app.use("/api/gallery", galleryRoutes);

app.use("/api/blog/category",blogCatRoutes);
app.use("/api/blog/tag",blogTagRoutes);
app.use("/api/blog",blogRoutes);
app.use("/api/blog/comment",blogCommentRoutes);

app.use("/api/coreteam",coreTeamRoutes);

app.use("/api/gamingTeam", gamingTeamRoutes);
app.use("/api/player", playerRoutes);

app.use("/api/user",userRoutes);

export default app;
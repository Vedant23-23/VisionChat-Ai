import Hero from "../components/Hero";
import UploadVideo from "../components/UploadVideo";
import VideoSummary from "../components/VideoSummary";
import ChatAssistant from "../components/ChatAssistant";
import MCQTest from "../components/MCQTest";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Hero />
      <UploadVideo />
      <VideoSummary />
      <ChatAssistant />
      <MCQTest />
      <About />
      <Footer />
    </div>
  );
}

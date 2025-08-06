import { useState, useRef, DragEvent } from "react";
import { Upload, Film, Check, Loader2, AlertCircle } from "lucide-react";

const UploadVideo = () => {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isProcessed, setIsProcessed] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      if (droppedFile.type.startsWith("video/")) {
        setFile(droppedFile);
        processVideo(droppedFile);
      }
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.type.startsWith("video/")) {
        setFile(selectedFile);
        processVideo(selectedFile);
      }
    }
  };

  const processVideo = (file: File) => {
    setIsProcessing(true);
    setIsProcessed(false);

    // Simulate processing time
    setTimeout(() => {
      setIsProcessing(false);
      setIsProcessed(true);
    }, 3000);
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <section
      id="upload"
      className="py-20 bg-gradient-to-b from-background to-slate-900/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                Upload Your Video
              </span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Upload a video (Max: 2 minutes) and let our AI analyze traffic
              patterns, detect events, and identify potential violations.
            </p>
          </div>

          {/* Upload Area */}
          <div className="neomorphic rounded-2xl p-8 mb-8">
            <div
              className={`relative border-2 border-dashed rounded-xl p-12 text-center transition-all-smooth ${
                dragActive
                  ? "border-neon-blue bg-neon-blue/5"
                  : "border-border hover:border-neon-blue/50"
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="video/*"
                onChange={handleFileInput}
                className="hidden"
              />

              {!file && !isProcessing && (
                <div className="space-y-6">
                  <div className="flex justify-center">
                    <div className="p-4 rounded-full glass-card border border-neon-blue/30">
                      <Upload className="h-12 w-12 text-neon-blue" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Drag & Drop Your Video Here
                    </h3>
                    <p className="text-foreground/70 mb-4">
                      or click to browse files
                    </p>
                    <button
                      onClick={openFileDialog}
                      className="bg-gradient-to-r from-neon-blue to-neon-purple text-white px-6 py-3 rounded-lg font-medium transition-all-smooth hover:shadow-neon hover:scale-105"
                    >
                      Browse Files
                    </button>
                  </div>

                  <div className="text-sm text-foreground/60">
                    Supported formats: MP4, AVI, MOV, WebM • Max size: 100MB •
                    Max duration: 2 minutes
                  </div>
                </div>
              )}

              {file && !isProcessing && !isProcessed && (
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <Film className="h-12 w-12 text-neon-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {file.name}
                    </h3>
                    <p className="text-foreground/70">
                      {formatFileSize(file.size)}
                    </p>
                  </div>
                  <button
                    onClick={() => setFile(null)}
                    className="text-neon-blue hover:text-neon-purple transition-colors"
                  >
                    Remove file
                  </button>
                </div>
              )}

              {isProcessing && (
                <div className="space-y-6">
                  <div className="flex justify-center">
                    <Loader2 className="h-12 w-12 text-neon-blue animate-spin" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Processing Video...
                    </h3>
                    <p className="text-foreground/70 mb-4">
                      AI is analyzing your video for events, violations, and
                      patterns
                    </p>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-to-r from-neon-blue to-neon-purple h-2 rounded-full animate-pulse w-3/4"></div>
                    </div>
                  </div>
                </div>
              )}

              {isProcessed && (
                <div className="space-y-6">
                  <div className="flex justify-center">
                    <div className="p-4 rounded-full bg-green-500/20 border border-green-500/30">
                      <Check className="h-12 w-12 text-green-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Video Processed Successfully!
                    </h3>
                    <p className="text-foreground/70">
                      Analysis complete. Scroll down to view the results and
                      start chatting.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Video Preview */}
          {file && (
            <div className="glass-card rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">
                Video Preview
              </h3>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <video
                  src={URL.createObjectURL(file)}
                  controls
                  className="max-w-full max-h-full rounded-lg"
                />
              </div>
            </div>
          )}

          {/* AI Processing Info */}
          <div className="glass-card rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-neon-blue/20">
                <AlertCircle className="h-6 w-6 text-neon-blue" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">
                  AI Analysis Features
                </h3>
                <ul className="text-foreground/70 space-y-1 text-sm">
                  <li>
                    • Real-time event detection (pedestrians, vehicles, traffic
                    lights)
                  </li>
                  <li>• Traffic violation identification and timestamping</li>
                  <li>
                    • Environmental context analysis (time of day, weather
                    conditions)
                  </li>
                  <li>• Scene summarization with key event highlights</li>
                  <li>• Interactive chat interface for detailed questioning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadVideo;

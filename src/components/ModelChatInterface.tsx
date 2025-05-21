
import { useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface ModelChatInterfaceProps {
  modelName: string;
  messages: ChatMessage[];
  isLoading?: boolean;
}

export function ModelChatInterface({ modelName, messages, isLoading = false }: ModelChatInterfaceProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{modelName}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow overflow-y-auto space-y-4 pb-4">
        {messages.length === 0 ? (
          <div className="h-full flex items-center justify-center">
            <p className="text-muted-foreground">No messages yet</p>
          </div>
        ) : (
          messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[90%] p-3 rounded-lg ${
                  message.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground"
                }`}
              >
                <div className="whitespace-pre-wrap">{message.content}</div>
              </div>
            </div>
          ))
        )}
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[90%] p-3 rounded-lg bg-muted text-foreground">
              <div className="flex space-x-2">
                <div className="h-2 w-2 rounded-full bg-current animate-bounce"></div>
                <div className="h-2 w-2 rounded-full bg-current animate-bounce delay-75"></div>
                <div className="h-2 w-2 rounded-full bg-current animate-bounce delay-150"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </CardContent>
    </Card>
  );
}

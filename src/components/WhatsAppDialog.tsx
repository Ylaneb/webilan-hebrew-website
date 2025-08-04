"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, MessageCircle, Send } from "lucide-react";

interface WhatsAppDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WhatsAppDialog({
  isOpen,
  onClose
}: WhatsAppDialogProps) {
  const [message, setMessage] = useState(
    `היי אילן - אפשר לקבל יותר פרטים לגבי בניית האתר שלי?`
  );

  const handleSendWhatsApp = () => {
    const phoneNumber = "972529529613"; // Your WhatsApp number
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  const handleClose = () => {
    setMessage(`היי אילן - אפשר לקבל יותר פרטים לגבי בניית האתר שלי?`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <MessageCircle className="h-6 w-6 text-green-600 ml-2" />
            <h3 className="text-2xl font-bold text-slate-800">שלח הודעה ב-WhatsApp</h3>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClose}
            className="h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">הודעה מותאמת אישית</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full h-24 p-3 border-2 border-slate-200 rounded-lg resize-none focus:border-green-500 outline-none"
              placeholder="כתוב את ההודעה שלך..."
            />
          </div>
          
          <div className="flex space-x-3 space-x-reverse">
            <Button
              variant="outline"
              onClick={handleClose}
              className="flex-1"
            >
              ביטול
            </Button>
            <Button
              onClick={handleSendWhatsApp}
              className="flex-1 bg-green-600 hover:bg-green-700"
            >
              <Send className="h-4 w-4 ml-2" />
              שלח ב-WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 
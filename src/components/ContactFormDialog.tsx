"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, X, User, Phone } from "lucide-react";

interface ContactFormDialogProps {
  isOpen: boolean;
  onClose: () => void;
  initialDescription?: string;
  title?: string;
  onSubmit?: (formData: ContactFormData) => void;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  websiteDescription: string;
}

export default function ContactFormDialog({
  isOpen,
  onClose,
  initialDescription = "",
  title = "קבל הצעת מחיר חינם",
  onSubmit
}: ContactFormDialogProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phone: "",
    email: "",
    websiteDescription: initialDescription
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitButtonRef = useRef<HTMLButtonElement>(null);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSubmitting) return; // Prevent double submission
    
    try {
      setIsSubmitting(true);
      
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Default behavior - send to API
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            timestamp: new Date().toISOString(),
            source: 'contact-form-dialog'
          }),
        });

        const result = await response.json();
        
        if (result.success) {
          alert("תודה! נציג יצור איתך קשר בהקדם.");
        } else {
          alert("שגיאה בשליחת הטופס. אנא נסה שוב.");
        }
      }
      
      // Reset form and close dialog
      setFormData({ name: "", phone: "", email: "", websiteDescription: "" });
      onClose();
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert("שגיאה בשליחת הטופס. אנא נסה שוב.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setFormData({ name: "", phone: "", email: "", websiteDescription: "" });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-slate-800">{title}</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClose}
            className="h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <form onSubmit={handleFormSubmit} className="space-y-4">
          {initialDescription && (
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">תיאור האתר</label>
              <textarea
                value={formData.websiteDescription}
                onChange={(e) => setFormData(prev => ({ ...prev, websiteDescription: e.target.value }))}
                className="w-full h-20 p-3 border-2 border-slate-200 rounded-lg resize-none focus:border-blue-500 outline-none"
                placeholder="תאר את האתר שאתה רוצה..."
                readOnly={!!initialDescription}
              />
            </div>
          )}
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">שם מלא</label>
            <div className="relative">
              <User className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="h-12 pr-10 border-2 border-slate-200 focus:border-blue-500 rounded-lg"
                placeholder="הכנס את שמך המלא"
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">טלפון</label>
            <div className="relative">
              <Phone className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                className="h-12 pr-10 border-2 border-slate-200 focus:border-blue-500 rounded-lg"
                placeholder="הכנס את מספר הטלפון שלך"
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">אימייל</label>
            <div className="relative">
              <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="h-12 pr-10 border-2 border-slate-200 focus:border-blue-500 rounded-lg"
                placeholder="הכנס את האימייל שלך"
                required
              />
            </div>
          </div>
          
          <Button
            ref={submitButtonRef}
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white ml-2"></div>
                שליחה...
              </>
            ) : (
              <>
                <Mail className="h-5 w-5 ml-2" />
                שלח בקשה
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
} 
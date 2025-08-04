"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { 
  Rocket, 
  Code, 
  Palette, 
  Globe, 
  Github, 
  ExternalLink,
  ArrowRight,
  CheckCircle,
  Star,
  Shield,
  Sparkles,
  Play,
  ChevronDown,
  Mail,
  Cpu,
  Database,
  Cloud,
  MessageCircle,
  Phone,
  MapPin,
  Clock
} from "lucide-react";
import { useState } from "react";
import ContactFormDialog, { ContactFormData } from "@/components/ContactFormDialog";
import WhatsAppDialog from "@/components/WhatsAppDialog";

export default function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const [isWhatsAppDialogOpen, setIsWhatsAppDialogOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({ name: "", price: "" });
  const [websiteDescription, setWebsiteDescription] = useState("");

  const handleInputSubmit = () => {
    if (websiteDescription.trim()) {
      setIsDialogOpen(true);
    }
  };

  const handleFormSubmit = (formData: ContactFormData) => {
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    alert("תודה! נציג יצור איתך קשר בהקדם.");
  };

  const handleContactSubmit = async (formData: ContactFormData) => {
    // Different handling for general contact form
    console.log("Contact form submitted:", formData);
    alert("תודה! נציג יצור איתך קשר בהקדם.");
  };

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Contact Form Dialogs */}
      <ContactFormDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        initialDescription={websiteDescription}
        onSubmit={handleFormSubmit}
      />
      
      <ContactFormDialog
        isOpen={isContactDialogOpen}
        onClose={() => setIsContactDialogOpen(false)}
        title="צור קשר"
        onSubmit={handleContactSubmit}
      />
      
      <WhatsAppDialog
        isOpen={isWhatsAppDialogOpen}
        onClose={() => setIsWhatsAppDialogOpen(false)}
        planName={selectedPlan.name}
        planPrice={selectedPlan.price}
      />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Webilan
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#journey" className="text-slate-600 hover:text-blue-600 transition-colors">פרוייקטים</a>
              <a href="#clients" className="text-slate-600 hover:text-blue-600 transition-colors">לקוחות</a>
              <a href="#pricing" className="text-slate-600 hover:text-blue-600 transition-colors">מחירון</a>
            </div>
            <div className="flex items-center">
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                onClick={() => setIsContactDialogOpen(true)}
              >
                <Rocket className="h-4 w-4 ml-2" />
                התחל לבנות
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              נבנה לך אתר מקצועי
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
              צוות מקצועי של מפתחים ומעצבים יבנה לך אתר מודרני ומתקדם. 
              מהרעיון ועד לאתר חי - אנחנו כאן בשבילך.
            </p>
            
            {/* AI Input Section */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Input 
                  placeholder="תאר את האתר שאתה רוצה..." 
                  className="h-14 text-lg pr-12 border-2 border-slate-200 focus:border-blue-500 rounded-xl"
                  value={websiteDescription}
                  onChange={(e) => setWebsiteDescription(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleInputSubmit()}
                />
                <Button 
                  size="sm" 
                  className="absolute left-2 top-2 h-10 w-10 p-0 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  onClick={handleInputSubmit}
                >
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex flex-wrap justify-center gap-3 mt-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="rounded-full"
                  onClick={() => {
                    setWebsiteDescription("חנות אונליין");
                    handleInputSubmit();
                  }}
                >
                  חנות אונליין
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="rounded-full"
                  onClick={() => {
                    setWebsiteDescription("אתר פורטפוליו");
                    handleInputSubmit();
                  }}
                >
                  אתר פורטפוליו
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="rounded-full"
                  onClick={() => {
                    setWebsiteDescription("אתר עסקי");
                    handleInputSubmit();
                  }}
                >
                  אתר עסקי
                </Button>
              </div>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center space-x-4 text-slate-600">
              <div className="flex -space-x-2">
                {[
                  { 
                    name: "דוד כהן", 
                    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
                    fallback: "ד"
                  },
                  { 
                    name: "שרה לוי", 
                    photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
                    fallback: "ש"
                  },
                  { 
                    name: "מיכאל רוזן", 
                    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
                    fallback: "מ"
                  },
                  { 
                    name: "רחל גולדברג", 
                    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
                    fallback: "ר"
                  }
                ].map((person, i) => (
                  <div 
                    key={i} 
                    className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center text-white text-xs font-medium"
                    title={person.name}
                    data-person={person.name}
        >
          <Image
                      src={person.photo} 
                      alt={person.name}
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                      onError={() => {
                        const parent = document.querySelector(`[data-person="${person.name}"]`);
                        if (parent) {
                          parent.textContent = person.fallback;
                        }
                      }}
                    />
                  </div>
                ))}
              </div>
              <span className="text-sm">עשרות חברים סומכים עלינו</span>
            </div>
          </div>

          {/* Preview Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { 
                title: "לוח בקרה מקצועי", 
                description: "ניהול פרויקטים וניתוח נתונים מתקדם",
                image: "/img/eden01shift.jpg",
                category: "Dashboard"
              },
              { 
                title: "טפסים חכמים", 
                description: "מערכות ניהול וטפסים מתקדמים",
                image: "/img/OR Harmony Next1.jpg",
                category: "Forms"
              },
              { 
                title: "אתר ארגוני", 
                description: "פתרונות אינטרנט מתקדמים לעסקים",
                image: "/img/01Webilan - פיתוח אתרים מודרני.jpg",
                category: "Enterprise"
              }
            ].map((card, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-slate-200">
                <div className="w-full h-32 rounded-lg mb-4 overflow-hidden relative">
          <Image
                    src={card.image} 
                    alt={card.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-slate-700">
                    {card.category}
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                <p className="text-slate-600 text-sm">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Journey Section */}
      <section id="journey" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">המסע שלנו יחד</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              מהרעיון הראשוני ועד לאתר חי - אנחנו הולכים איתך כל הדרך
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {/* Connection Lines - Better positioning */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none">
              {/* Horizontal lines between cards */}
              <div className="absolute top-[15%] left-[calc(33.33%-1rem)] right-[calc(33.33%-1rem)] h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
              <div className="absolute top-[15%] left-[calc(66.67%-1rem)] right-[calc(16.67%-1rem)] h-1 bg-gradient-to-r from-purple-600 to-green-600 rounded-full"></div>
              
              <div className="absolute top-[85%] left-[calc(33.33%-1rem)] right-[calc(33.33%-1rem)] h-1 bg-gradient-to-r from-green-600 to-orange-600 rounded-full"></div>
              <div className="absolute top-[85%] left-[calc(66.67%-1rem)] right-[calc(16.67%-1rem)] h-1 bg-gradient-to-r from-orange-600 to-cyan-600 rounded-full"></div>
              
              {/* Vertical lines connecting rows */}
              <div className="absolute top-[50%] left-[calc(16.67%-0.5rem)] w-1 h-[35%] bg-gradient-to-b from-purple-600 to-green-600 rounded-full"></div>
              <div className="absolute top-[50%] left-[calc(50%-0.5rem)] w-1 h-[35%] bg-gradient-to-b from-purple-600 to-green-600 rounded-full"></div>
              <div className="absolute top-[50%] left-[calc(83.33%-0.5rem)] w-1 h-[35%] bg-gradient-to-b from-purple-600 to-green-600 rounded-full"></div>
            </div>
              {[
                {
                  icon: Sparkles,
                  title: "שיחה ראשונית",
                  description: "נפגש, נבין את הצרכים שלך, נגדיר מטרות ונבנה אסטרטגיה מותאמת אישית לפרויקט שלך.",
                  color: "blue",
                  step: "1"
                },
                {
                  icon: Palette,
                  title: "עיצוב ופיתוח",
                  description: "צוות המעצבים והמפתחים שלנו יבנה את האתר שלך עם הטכנולוגיות המתקדמות ביותר.",
                  color: "purple",
                  step: "2"
                },
                {
                  icon: Cpu,
                  title: "בדיקות ואופטימיזציה",
                  description: "נבדוק כל פיקסל, נבטיח שהכל עובד מושלם ונבצע אופטימיזציה לביצועים הטובים ביותר.",
                  color: "green",
                  step: "3"
                },
                {
                  icon: Database,
                  title: "העלאה לחי",
                  description: "נעלה את האתר לשרתים מהירים ואמינים עם תעודות SSL ואבטחה מתקדמת.",
                  color: "orange",
                  step: "4"
                },
                {
                  icon: Cloud,
                  title: "תמיכה מתמשכת",
                  description: "נמשיך לתמוך בך גם אחרי ההשקה - עדכונים, תחזוקה ושיפורים מתמשכים.",
                  color: "cyan",
                  step: "5"
                },
                {
                  icon: Shield,
                  title: "צמיחה והרחבה",
                  description: "נעזור לך לגדול ולהרחיב את האתר שלך עם תכונות חדשות ופונקציונליות מתקדמת.",
                  color: "red",
                  step: "6"
                }
              ].map((step, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative bg-white">
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                    {step.step}
                  </div>
                  <CardHeader>
                    <div className={`w-12 h-12 bg-${step.color}-100 dark:bg-${step.color}-900/20 rounded-lg flex items-center justify-center mb-4`}>
                      <step.icon className={`h-6 w-6 text-${step.color}-600`} />
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                    <CardDescription className="text-base">{step.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section id="templates" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">תבניות מקצועיות</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              התחל עם תבניות יפות ורספונסיביות שעוצבו על ידי מומחים. התאם אותן להתאים למותג שלך בצורה מושלמת.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "סוכנות פרו", category: "עסקי", color: "from-blue-500 to-cyan-500" },
              { name: "חנות פלוס", category: "חנות", color: "from-purple-500 to-pink-500" },
              { name: "פורטפוליו אליט", category: "יצירתי", color: "from-green-500 to-emerald-500" },
              { name: "מסעדה גולד", category: "אוכל", color: "from-orange-500 to-red-500" }
            ].map((template, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
                <div className={`h-48 bg-gradient-to-r ${template.color} rounded-t-lg flex items-center justify-center`}>
                  <Globe className="h-12 w-12 text-white" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">{template.name}</h3>
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  </div>
                  <p className="text-slate-600 text-sm mb-4">{template.category}</p>
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    תצוגה מקדימה
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="clients" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">אהוב על ידי מפתחים ברחבי העולם</h2>
            <p className="text-xl text-slate-600">ראה מה הקהילה שלנו בונה</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "דוד כהן",
                role: "מנהל פרויקטים",
                company: "סטארט-אפ ישראלי",
                photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
                quote: "הצוות של Webilan בנה לנו אתר מקצועי תוך שבועיים. התקשורת הייתה מעולה והתוצאה מדהימה.",
                rating: 5
              },
              {
                name: "שרה לוי",
                role: "בעלת עסק",
                company: "בוטיק אופנה",
                photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
                quote: "האתר החדש הכפיל את המכירות שלנו. עיצוב מודרני וקל לשימוש - בדיוק מה שרציתי.",
                rating: 5
              },
              {
                name: "מיכאל רוזן",
                role: "מפתח עצמאי",
                company: "פרילנסר",
                photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
                quote: "התבניות שלהם איכותיות והקוד נקי. חוסך לי שעות של עבודה על כל פרויקט.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden ml-4">
          <Image
                        src={testimonial.photo} 
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-slate-600">{testimonial.role} ב-{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 italic">&quot;{testimonial.quote}&quot;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">מחירים פשוטים ושקופים</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              התחל בחינם וגדל ככל שאתה מתקדם. אין עמלות נסתרות, אין הפתעות.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "אתר תדמית התחלתי",
                subtitle: "Starter Site",
                price: "₪4,800",
                period: "+ מע״מ",
                description: "נקודת כניסה ללקוחות בתחילת הדרך, עם תקציב מוגדר",
                features: [
                  "שיחת אפיון וייעוץ ראשונית",
                  "עיצוב מבוסס תבנית פרימיום איכותית",
                  "בניית אתר תדמית של עד 5 עמודים",
                  "התאמה מלאה למובייל",
                  "הטמעת תוכן ראשוני",
                  "טופס יצירת קשר בסיסי",
                  "הדרכה קצרה על תפעול האתר"
                ],
                button: "התחל פרויקט",
                popular: false
              },
              {
                name: "החבילה העסקית",
                subtitle: "The Business Package",
                price: "₪8,500",
                period: "+ מע״מ",
                description: "הפתרון המלא והמותאם אישית לרוב העסקים הקטנים והבינוניים",
                features: [
                  "כל מה שבחבילת הבסיס",
                  "תהליך אפיון מעמיק",
                  "עיצוב ייחודי ומותאם אישית",
                  "בניית אתר של עד 10 עמודים",
                  "חיבור לכלים חיצוניים",
                  "הקמת בלוג מקצועי",
                  "הטמעה של כלי SEO בסיסיים"
                ],
                button: "התחל פרויקט",
                popular: true
              },
              {
                name: "פרימיום / חנות אונליין",
                subtitle: "Premium / E-Commerce",
                price: "צרו קשר",
                description: "הפתרון לעסקים שרוצים למכור אונליין או צריכים פונקציונליות מורכבת",
                features: [
                  "כל מה שבחבילה העסקית",
                  "אפיון, עיצוב והקמה של חנות אינטרנטית מלאה",
                  "העלאת מוצרים ראשונית",
                  "הגדרת קטגוריות, משלוחים, קופונים",
                  "חיבור מאובטח לספקי סליקה",
                  "הדרכה מלאה על ניהול החנות"
                ],
                button: "צור קשר להצעת מחיר",
                popular: false
              }
            ].map((plan, index) => (
              <Card key={index} className={`border-0 ${plan.popular ? 'bg-gradient-to-br from-blue-600 to-purple-600 shadow-2xl scale-105' : 'bg-white/10 backdrop-blur-sm'}`}>
                <CardHeader className="text-center">
                                      {plan.popular && (
                      <div className="bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full w-fit mx-auto mb-4">
                        ★ החבילה המומלצת ★
                      </div>
                    )}
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    {plan.subtitle && (
                      <div className="text-sm text-slate-300 mt-1">{plan.subtitle}</div>
                    )}
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.period && <span className="text-slate-300 mr-1">{plan.period}</span>}
                    </div>
                    <CardDescription className="text-slate-300">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 ml-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-white text-blue-600 hover:bg-slate-100' : 'bg-blue-600 hover:bg-blue-700'}`}
                    size="lg"
                    onClick={() => {
                      setSelectedPlan({ name: plan.name, price: plan.price });
                      setIsWhatsAppDialogOpen(true);
                    }}
                  >
                    {plan.button}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">שאלות נפוצות</h2>
            <p className="text-xl text-slate-600">כל מה שצריך לדעת על Webilan</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "מה זה Webilan?",
                answer: "Webilan היא בונה אתרים מבוססת בינה מלאכותית שמאפשר לך ליצור אתרים מקצועיים באמצעות תיאורים בשפה טבעית. אין צורך בקוד."
              },
              {
                question: "האם אני צריך ניסיון בקוד?",
                answer: "לא! Webilan עוצבה לכולם. הבינה המלאכותית שלנו מטפלת בהיבטים הטכניים בזמן שאתה מתמקד בתוכן ובהעדפות העיצוב שלך."
              },
              {
                question: "איזה סוגי אתרים אני יכול לבנות?",
                answer: "אתה יכול לבנות כל סוג של אתר: פורטפוליו, אתרים עסקיים, חנויות אונליין, בלוגים, דפי נחיתה ועוד."
              },
              {
                question: "איך עובד יצירת האתר באמצעות בינה מלאכותית?",
                answer: "פשוט תאר את רעיון האתר שלך בשפה טבעית. הבינה המלאכותית שלנו מנתחת את הדרישות שלך ויוצרת אתר פונקציונלי לחלוטין עם עיצוב, מבנה תוכן ותכונות מתאימות."
              },
              {
                question: "האם אני יכול להתאים את האתרים שנוצרו?",
                answer: "בהחלט! כל אתר מגיע עם העורך שלנו לגרירה ושחרור, המאפשר לך להתאים צבעים, גופנים, פריסות ולהוסיף תוכן משלך."
              },
              {
                question: "מה לגבי אחסון ודומיינים?",
                answer: "כל האתרים כוללים אחסון חינמי, תעודות SSL ו-CDN. אתה יכול לחבר דומיין משלך או להשתמש בתת-דומיין חינמי שלנו."
              }
            ].map((faq, index) => (
              <Card key={index} className="border border-slate-200 hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                    <ChevronDown className="h-5 w-5 text-slate-400" />
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-slate-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">מוכן לבנות את האתר החלומי שלך?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            הצטרף לאלפי מפתחים ויוצרים שכבר בונים אתרים מדהימים עם Webilan.
          </p>
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 bg-white text-blue-600 hover:bg-slate-100"
              onClick={() => setIsContactDialogOpen(true)}
            >
              <Rocket className="h-5 w-5 ml-2" />
              התחל לבנות חינם
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">01Webilan</span>
              </div>
              <p className="text-slate-400 mb-4">
                בניית אתרים מקצועיים ומותאמים אישית לעסקים קטנים ובינוניים. מהרעיון ועד לאתר חי.
              </p>
              <div className="flex space-x-4">
                <a href="https://wa.me/972529529613" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer" />
                </a>
                <a href="mailto:info@01webilan.com">
                  <Mail className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer" />
                </a>
                <a href="tel:+972529529613">
                  <Phone className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">שירותים</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#journey" className="hover:text-white transition-colors">תהליך העבודה</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">חבילות ומחירים</a></li>
                <li><a href="#" className="hover:text-white transition-colors">אתרי תדמית</a></li>
                <li><a href="#" className="hover:text-white transition-colors">חנויות אונליין</a></li>
                <li><a href="#" className="hover:text-white transition-colors">תחזוקה ותמיכה</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">לקוחות</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">פרויקטים לדוגמה</a></li>
                <li><a href="#" className="hover:text-white transition-colors">המלצות לקוחות</a></li>
                <li><a href="#" className="hover:text-white transition-colors">תהליך בניית האתר</a></li>
                <li><a href="#" className="hover:text-white transition-colors">שאלות נפוצות</a></li>
                <li><a href="#" className="hover:text-white transition-colors">צור קשר</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">צור קשר</h3>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-center">
                  <Phone className="h-4 w-4 ml-2" />
                  <a href="tel:+972529529613" className="hover:text-white transition-colors">+972-52-952-9613</a>
                </li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 ml-2" />
                  <a href="mailto:info@01webilan.com" className="hover:text-white transition-colors">info@01webilan.com</a>
                </li>
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 ml-2" />
                  <span>ישראל</span>
                </li>
                <li className="flex items-center">
                  <Clock className="h-4 w-4 ml-2" />
                  <span>א'-ה' 9:00-18:00</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>© 2024 01Webilan. כל הזכויות שמורות. בניית אתרים מקצועיים בישראל.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

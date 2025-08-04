import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
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
  Cloud
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
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
              <a href="#features" className="text-slate-600 hover:text-blue-600 transition-colors">תכונות</a>
              <a href="#templates" className="text-slate-600 hover:text-blue-600 transition-colors">תבניות</a>
              <a href="#pricing" className="text-slate-600 hover:text-blue-600 transition-colors">מחירים</a>
              <a href="#enterprise" className="text-slate-600 hover:text-blue-600 transition-colors">ארגונים</a>
            </div>
            <div className="flex items-center">
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
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
              בנה את האתר החלומי שלך
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
              צור אתרים מקצועיים ומרשימים תוך דקות עם הפלטפורמה שלנו מבוססת בינה מלאכותית. 
              אין צורך בקוד - פשוט תאר את החזון שלך וצפה בו מתממש.
            </p>
            
            {/* AI Input Section */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Input 
                  placeholder="תאר את רעיון האתר שלך..." 
                  className="h-14 text-lg pr-12 border-2 border-slate-200 focus:border-blue-500 rounded-xl"
                />
                <Button 
                  size="sm" 
                  className="absolute left-2 top-2 h-10 w-10 p-0 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex flex-wrap justify-center gap-3 mt-4">
                <Button variant="outline" size="sm" className="rounded-full">
                  חנות אונליין
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  אתר פורטפוליו
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  אתר עסקי
                </Button>
              </div>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center space-x-4 text-slate-600">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-2 border-white"></div>
                ))}
              </div>
              <span className="text-sm">מעל 10,000 מפתחים סומכים עלינו</span>
            </div>
          </div>

          {/* Preview Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "פורטפוליו מודרני", color: "from-blue-400 to-cyan-400" },
              { title: "חנות אונליין", color: "from-purple-400 to-pink-400" },
              { title: "אתר עסקי", color: "from-green-400 to-emerald-400" }
            ].map((card, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-slate-200">
                <div className={`w-full h-32 bg-gradient-to-r ${card.color} rounded-lg mb-4 flex items-center justify-center`}>
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                <p className="text-slate-600 text-sm">תבנית מקצועית עם עיצוב מודרני</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">כל מה שצריך לבנות אתרים מדהימים</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              מדפי נחיתה פשוטים ועד אפליקציות מורכבות - אנחנו מכסים אותך עם כלים חזקים ועיצוב אינטואיטיבי.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: "עיצוב מבוסס בינה מלאכותית",
                description: "תאר את החזון שלך בשפה טבעית וצפה בבינה המלאכותית שלנו יוצרת אתרים יפים ופונקציונליים באופן מיידי.",
                color: "blue"
              },
              {
                icon: Palette,
                title: "עורך גרירה ושחרור",
                description: "התאם כל אלמנט עם העורך החזותי האינטואיטיבי שלנו. אין צורך בידע בקוד.",
                color: "purple"
              },
              {
                icon: Cpu,
                title: "תכונות מתקדמות",
                description: "חנויות אונליין, בלוגים, טפסים, אנליטיקס - כל מה שצריך לבנות נוכחות מקוונת מלאה.",
                color: "green"
              },
              {
                icon: Database,
                title: "בק-אנד מובנה",
                description: "הגדרת מסד נתונים אוטומטית, אימות משתמשים ויצירת API לאפליקציות שלך.",
                color: "orange"
              },
              {
                icon: Cloud,
                title: "פריסה מיידית",
                description: "פרוס את האתר שלך בלחיצה אחת. CDN גלובלי, תעודות SSL וזמינות של 99.9% כלולים.",
                color: "cyan"
              },
              {
                icon: Shield,
                title: "אבטחה ארגונית",
                description: "אבטחה ברמת בנק עם גיבויים אוטומטיים, הגנה מפני DDoS ותעודות תאימות.",
                color: "red"
              }
            ].map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className={`w-12 h-12 bg-${feature.color}-100 dark:bg-${feature.color}-900/20 rounded-lg flex items-center justify-center mb-4`}>
                    <feature.icon className={`h-6 w-6 text-${feature.color}-600`} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">אהוב על ידי מפתחים ברחבי העולם</h2>
            <p className="text-xl text-slate-600">ראה מה הקהילה שלנו בונה</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "שרה צ'ן",
                role: "מפתחת פרונט-אנד",
                company: "טק-קורפ",
                avatar: "ש״צ",
                quote: "Webilan שינתה את האופן שבו אני בונה אתרים. תכונות הבינה המלאכותית מדהימות - אני יכולה ליצור אבות טיפוס תוך דקות במקום שעות.",
                rating: 5
              },
              {
                name: "מרקוס רודריגז",
                role: "מעצב פרילנסר",
                company: "סטודיו עיצוב",
                avatar: "מר",
                quote: "התבניות יפות ואפשרויות ההתאמה אינסופיות. הלקוחות שלי אוהבים את התוצאות.",
                rating: 5
              },
              {
                name: "אמילי ווטסון",
                role: "מייסדת סטארט-אפ",
                company: "מעבדת חדשנות",
                avatar: "או",
                quote: "בנינו את כל ה-MVP שלנו בסוף שבוע אחד. הפריסה הייתה חלקה והביצועים יוצאי דופן.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold ml-4">
                      {testimonial.avatar}
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
                name: "מתחיל",
                price: "חינם",
                description: "מושלם לפרויקטים אישיים ופורטפוליו",
                features: [
                  "עד 3 אתרים",
                  "תבניות בסיסיות",
                  "1GB אחסון",
                  "תמיכה קהילתית",
                  "תעודות SSL"
                ],
                button: "התחל חינם",
                popular: false
              },
              {
                name: "מקצועי",
                price: "₪99",
                period: "/חודש",
                description: "לעסקים מתפתחים ומפתחים",
                features: [
                  "אתרים ללא הגבלה",
                  "תבניות פרימיום",
                  "10GB אחסון",
                  "תמיכה מועדפת",
                  "דומיינים מותאמים",
                  "לוח בקרה אנליטיקס",
                  "תכונות מסחר אלקטרוני"
                ],
                button: "התחל ניסיון חינם",
                popular: true
              },
              {
                name: "ארגוני",
                price: "מותאם",
                description: "לצוותים גדולים וארגונים",
                features: [
                  "כל מה שבמקצועי",
                  "שיתוף פעולה בצוות",
                  "אבטחה מתקדמת",
                  "אינטגרציות מותאמות",
                  "תמיכה ייעודית",
                  "ערבות SLA",
                  "אפשרויות מותאמות אישית"
                ],
                button: "צור קשר מכירות",
                popular: false
              }
            ].map((plan, index) => (
              <Card key={index} className={`border-0 ${plan.popular ? 'bg-gradient-to-br from-blue-600 to-purple-600 shadow-2xl scale-105' : 'bg-white/10 backdrop-blur-sm'}`}>
                <CardHeader className="text-center">
                  {plan.popular && (
                    <div className="bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full w-fit mx-auto mb-4">
                      הכי פופולרי
                    </div>
                  )}
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 bg-white text-blue-600 hover:bg-slate-100">
              <Rocket className="h-5 w-5 ml-2" />
              התחל לבנות חינם
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 border-white text-white hover:bg-white hover:text-blue-600">
              <Play className="h-5 w-5 ml-2" />
              צפה בדמו
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
                <span className="text-xl font-bold">Webilan</span>
              </div>
              <p className="text-slate-400 mb-4">
                הפלטפורמה מבוססת הבינה המלאכותית שמשנה את הרעיונות שלך לאתרים יפים ופונקציונליים תוך דקות.
              </p>
              <div className="flex space-x-4">
                <Github className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer" />
                <ExternalLink className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer" />
                <Mail className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer" />
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">מוצר</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">תכונות</a></li>
                <li><a href="#" className="hover:text-white transition-colors">תבניות</a></li>
                <li><a href="#" className="hover:text-white transition-colors">מחירים</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ארגונים</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">משאבים</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">תיעוד</a></li>
                <li><a href="#" className="hover:text-white transition-colors">מדריכים</a></li>
                <li><a href="#" className="hover:text-white transition-colors">קהילה</a></li>
                <li><a href="#" className="hover:text-white transition-colors">בלוג</a></li>
                <li><a href="#" className="hover:text-white transition-colors">תמיכה</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">חברה</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">אודות</a></li>
                <li><a href="#" className="hover:text-white transition-colors">קריירה</a></li>
                <li><a href="#" className="hover:text-white transition-colors">צור קשר</a></li>
                <li><a href="#" className="hover:text-white transition-colors">פרטיות</a></li>
                <li><a href="#" className="hover:text-white transition-colors">תנאים</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>© 2024 Webilan. כל הזכויות שמורות. נבנה עם ❤️ למפתחים.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Get In Touch</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Let's work together</h3>
              <p className="text-slate-300 mb-8">
                I'm always interested in new opportunities and exciting projects. Whether you have a question or just
                want to say hi, feel free to reach out!
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="h-5 w-5 text-slate-400" />
                  <span className="text-slate-300">john.doe@example.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-5 w-5 text-slate-400" />
                  <span className="text-slate-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-5 w-5 text-slate-400" />
                  <span className="text-slate-300">San Francisco, CA</span>
                </div>
              </div>
            </div>

            <Card className="bg-slate-900 border-slate-800">
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Your Name"
                      className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
                    />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
                    />
                  </div>
                  <Input
                    placeholder="Subject"
                    className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
                  />
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
                  />
                  <Button className="w-full bg-white text-slate-950 hover:bg-slate-200">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useToast } from "@/hooks/use-toast"

export default function Home() {
  const { toast } = useToast()

  const showContactToast = () => {
    toast({
      title: "Message Sent",
      description: "Thanks for reaching out! We'll get back to you soon.",
    })
  }

  return (
    <div className="min-h-full">
      {/* Hero Section with Gradient Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90"></div>
        <div className="container relative mx-auto px-4 py-32 sm:py-48">
          <div className="max-w-[800px] mx-auto text-center">
            <h1 className="text-5xl font-bold tracking-tight lg:text-7xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Cosmic Creations
            </h1>
            <p className="mt-6 text-xl text-white/90 max-w-[600px] mx-auto">
              Transforming ideas into digital reality. We create innovative solutions that inspire and elevate your brand.  
            </p>
            <div className="mt-12 flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="px-8 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 border-0">
                Explore Our Work
              </Button>
              <Button size="lg" variant="outline" className="px-8 border-white/30 text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-[600px] mx-auto">
            We offer a comprehensive range of digital solutions to help your business thrive in the modern world.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
            <div className="h-2 bg-gradient-to-r from-purple-600 to-indigo-600"></div>
            <CardContent className="pt-6">
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-purple-100 dark:bg-purple-900/20 mb-4 text-purple-600 dark:text-purple-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><path d="M9 17h6" /><path d="m9 12 2 2 4-4" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Web Development</h3>
              <p className="text-muted-foreground leading-relaxed">
                Custom websites and web applications built with the latest technologies for optimal performance and user experience.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
            <div className="h-2 bg-gradient-to-r from-blue-600 to-cyan-600"></div>
            <CardContent className="pt-6">
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900/20 mb-4 text-blue-600 dark:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">UI/UX Design</h3>
              <p className="text-muted-foreground leading-relaxed">
                Intuitive and visually stunning interfaces that enhance user engagement and drive conversion rates.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
            <div className="h-2 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
            <CardContent className="pt-6">
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/20 mb-4 text-indigo-600 dark:text-indigo-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Brand Strategy</h3>
              <p className="text-muted-foreground leading-relaxed">
                Comprehensive brand development that establishes your unique identity and connects with your target audience.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
              Our Portfolio
            </h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto">
              Explore our recent projects and see how we've helped businesses achieve their digital goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
            <div className="group relative overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="Portfolio item" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-semibold">E-Commerce Platform</h3>
                <p className="text-white/80 mt-2">Web Development</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Portfolio item" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-semibold">Corporate Rebrand</h3>
                <p className="text-white/80 mt-2">Brand Strategy</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Portfolio item" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-semibold">Mobile App Design</h3>
                <p className="text-white/80 mt-2">UI/UX Design</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="px-8 border-primary/30 text-primary hover:bg-primary/10">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-24">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
              Get In Touch
            </h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto">
              Have a project in mind? We'd love to hear from you. Send us a message and we'll get back to you as soon as possible.
            </p>
          </div>
          
          <Card className="border-0 shadow-xl overflow-hidden">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-background"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-background"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 h-[120px] bg-background" 
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
              </div>
              
              <div className="mt-6 text-right">
                <Button 
                  className="px-8 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
                  onClick={showContactToast}
                >
                  Send Message
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

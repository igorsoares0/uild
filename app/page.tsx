"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ArrowRight,
  Users,
  TrendingUp,
  DollarSign,
  Globe,
  Shield,
  Zap,
  Target,
  BarChart3,
  Lock,
  CheckCircle2,
  Star,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};



const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500">
                <span className="text-lg font-bold text-white">A</span>
              </div>
              <span className="text-xl font-semibold">UILD</span>
            </div>

            <div className="hidden items-center gap-8 md:flex">
              <a href="#home" className="text-sm font-semibold transition-colors hover:text-orange-500">Home</a>
              <a href="#features" className="text-sm font-semibold transition-colors hover:text-orange-500">Product</a>
              <a href="#services" className="text-sm font-semibold transition-colors hover:text-orange-500">Solution</a>
              <a href="#pricing" className="text-sm font-semibold transition-colors hover:text-orange-500">Pricing</a>
              <a href="#about" className="text-sm font-semibold transition-colors hover:text-orange-500">About us</a>
              <a href="#contact" className="text-sm font-semibold transition-colors hover:text-orange-500">Contact</a>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" className="hidden md:inline-flex font-bold">Sign in</Button>
              <Button className="bg-orange-500 hover:bg-orange-600 font-bold hidden md:inline-flex">Sign up</Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden border-t overflow-hidden"
              >
                <div className="py-4 space-y-3">
                  <a 
                    href="#home" 
                    className="block px-4 py-2 text-sm font-semibold transition-colors hover:text-orange-500 hover:bg-orange-50 rounded"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </a>
                  <a 
                    href="#features" 
                    className="block px-4 py-2 text-sm font-semibold transition-colors hover:text-orange-500 hover:bg-orange-50 rounded"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Product
                  </a>
                  <a 
                    href="#services" 
                    className="block px-4 py-2 text-sm font-semibold transition-colors hover:text-orange-500 hover:bg-orange-50 rounded"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Solution
                  </a>
                  <a 
                    href="#pricing" 
                    className="block px-4 py-2 text-sm font-semibold transition-colors hover:text-orange-500 hover:bg-orange-50 rounded"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Pricing
                  </a>
                  <a 
                    href="#about" 
                    className="block px-4 py-2 text-sm font-semibold transition-colors hover:text-orange-500 hover:bg-orange-50 rounded"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About us
                  </a>
                  <a 
                    href="#contact" 
                    className="block px-4 py-2 text-sm font-semibold transition-colors hover:text-orange-500 hover:bg-orange-50 rounded"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </a>
                  <div className="px-4 pt-2 space-y-2">
                    <Button variant="ghost" className="w-full font-bold justify-start">Sign in</Button>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 font-bold">Sign up</Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-16 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            className="flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Badge className="w-fit bg-orange-100 text-orange-700 hover:bg-orange-100">
                Founded by data experts
              </Badge>
            </motion.div>
            <motion.h1
              className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Build & growth with scalable tools
            </motion.h1>
            <motion.p
              className="text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Founded by data experts, we create cutting-edge SaaS analytics platforms tailored for businesses of all sizes.
            </motion.p>
            <motion.div
              className="flex flex-col gap-3 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 transition-all hover:scale-105 font-bold">
                Get started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="transition-all hover:scale-105 font-bold">
                Free trial
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-orange-100 to-orange-50"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/hero.jpg"
              alt="Professional working on laptop"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y bg-muted/30 py-12">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <motion.div
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="space-y-2" variants={fadeInUp}>
              <p className="text-3xl font-bold">95%</p>
              <p className="text-sm text-muted-foreground">Customer satisfaction rate, reflecting our dedication</p>
            </motion.div>
            <motion.div className="space-y-2" variants={fadeInUp}>
              <p className="text-3xl font-bold">10+</p>
              <p className="text-sm text-muted-foreground">Innovation and insights to users&apos; financial decision</p>
            </motion.div>
            <motion.div className="space-y-2" variants={fadeInUp}>
              <p className="text-3xl font-bold">$10m</p>
              <p className="text-sm text-muted-foreground">Platform has amazing secure and efficient financial</p>
            </motion.div>
            <motion.div className="space-y-2" variants={fadeInUp}>
              <p className="text-3xl font-bold">50m</p>
              <p className="text-sm text-muted-foreground">Users worldwide, providing them with financial solutions</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About/Mission Section */}
      <section id="about" className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <Star className="h-5 w-5 fill-orange-500 text-orange-500" />
            <Star className="h-5 w-5 fill-orange-500 text-orange-500" />
            <Star className="h-5 w-5 fill-orange-500 text-orange-500" />
            <Star className="h-5 w-5 fill-orange-500 text-orange-500" />
            <Star className="h-5 w-5 fill-orange-500 text-orange-500" />
            <span className="ml-2 text-sm font-medium">4.97/5 reviews</span>
          </div>
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            We are passionate about empowering individuals and{" "}
            <span className="text-muted-foreground">
              businesses to take control of their finances and achieve their financial goals.
            </span>
          </h2>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="border-y bg-muted/30 py-16 lg:py-24">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Empowering and strengthening your financial success
            </h2>
          </motion.div>
          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                  <BarChart3 className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Intuitive User Interface</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We deliver an intuitive and user-friendly interface design that enables effortless navigation and a seamless user experience by displaying statistics provide clear and relevant insights to support your decisions in real-time.
                </CardDescription>
              </CardContent>
            </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Advanced Security</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Your financial data is protected with bank-level encryption and multi-factor authentication. We employ industry-leading security measures to ensure your information remains safe and confidential.
                </CardDescription>
              </CardContent>
            </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Real-time Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Get instant insights into your financial health with real-time data processing and analytics. Make informed decisions with up-to-the-minute information at your fingertips.
                </CardDescription>
              </CardContent>
            </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                  <Target className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Goal Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Set and track your financial goals with our intelligent goal management system. Receive personalized recommendations and progress updates to help you achieve your objectives faster.
                </CardDescription>
              </CardContent>
            </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-pink-100">
                  <TrendingUp className="h-6 w-6 text-pink-600" />
                </div>
                <CardTitle>Smart Forecasting</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Leverage AI-powered forecasting to predict future trends and make proactive financial decisions. Our algorithms analyze your data to provide accurate projections.
                </CardDescription>
              </CardContent>
            </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100">
                  <Globe className="h-6 w-6 text-yellow-600" />
                </div>
                <CardTitle>Multi-platform Access</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Access your financial data anywhere, anytime on any device. Our cloud-based platform ensures seamless synchronization across all your devices for ultimate convenience.
                </CardDescription>
              </CardContent>
            </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-16 lg:py-24">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Comprehensive Financial Solutions
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            From personal finance to enterprise analytics, we provide tailored solutions for every need
          </p>
        </motion.div>
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div
            className="group relative overflow-hidden rounded-xl border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1"
            variants={fadeInUp}
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-orange-500 transition-transform group-hover:scale-110">
              <Users className="h-7 w-7 text-white" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Personal Finance</h3>
            <p className="text-muted-foreground">
              Manage your personal budget, track expenses, and build wealth with our intuitive personal finance tools designed for individuals.
            </p>
          </motion.div>

          <motion.div
            className="group relative overflow-hidden rounded-xl border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1"
            variants={fadeInUp}
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-blue-500 transition-transform group-hover:scale-110">
              <DollarSign className="h-7 w-7 text-white" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Business Analytics</h3>
            <p className="text-muted-foreground">
              Powerful analytics tools for businesses to track revenue, expenses, and growth metrics. Make data-driven decisions with confidence.
            </p>
          </motion.div>

          <motion.div
            className="group relative overflow-hidden rounded-xl border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1"
            variants={fadeInUp}
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-green-500 transition-transform group-hover:scale-110">
              <Lock className="h-7 w-7 text-white" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Enterprise Security</h3>
            <p className="text-muted-foreground">
              Enterprise-grade security features including SSO, advanced permissions, and compliance tools for large organizations.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="border-y bg-muted/30 py-16 lg:py-24">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Trusted by thousands of users
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              See what our customers have to say about their experience
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="https://i.pravatar.cc/150?img=1" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">John Davis</CardTitle>
                    <CardDescription>CEO at TechCorp</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-2 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  &quot;Advisora has transformed how we manage our company finances. The insights are invaluable and have helped us make better decisions.&quot;
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="https://i.pravatar.cc/150?img=5" />
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">Sarah Mitchell</CardTitle>
                    <CardDescription>Financial Advisor</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-2 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  &quot;The best financial platform I&apos;ve used. The interface is intuitive and the analytics are powerful. Highly recommend to anyone serious about their finances.&quot;
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="https://i.pravatar.cc/150?img=8" />
                    <AvatarFallback>MC</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">Michael Chen</CardTitle>
                    <CardDescription>Small Business Owner</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-2 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  &quot;As a small business owner, Advisora has been a game-changer. It&apos;s affordable, powerful, and saves me hours every week on financial management.&quot;
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-16 lg:py-24">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Choose the perfect plan for your needs. All plans include a 14-day free trial.
          </p>
        </motion.div>
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
            <CardHeader>
              <CardTitle>Starter</CardTitle>
              <CardDescription>Perfect for individuals</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$9</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Up to 3 accounts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Basic analytics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Mobile app access</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Email support</span>
                </div>
              </div>
              <Button className="w-full transition-all hover:scale-105 font-bold" variant="outline">
                Start free trial
              </Button>
            </CardContent>
          </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="border-orange-500 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1 hover:scale-105">
            <CardHeader>
              <Badge className="w-fit bg-orange-500">Most Popular</Badge>
              <CardTitle>Professional</CardTitle>
              <CardDescription>For growing businesses</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Unlimited accounts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Advanced analytics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Priority support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Custom integrations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-sm">API access</span>
                </div>
              </div>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 transition-all hover:scale-105 font-bold">
                Start free trial
              </Button>
            </CardContent>
          </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
              <CardDescription>For large organizations</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">Custom</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Everything in Professional</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Dedicated support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Custom contracts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-sm">SLA guarantees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-sm">On-premise option</span>
                </div>
              </div>
              <Button className="w-full transition-all hover:scale-105 font-bold" variant="outline">
                Contact sales
              </Button>
            </CardContent>
          </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="border-y bg-muted/30 py-16 lg:py-24">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Everything you need to know about our platform
            </p>
          </div>
          <div className="mx-auto max-w-3xl space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How secure is my financial data?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We use bank-level 256-bit encryption to protect your data. All data is encrypted both in transit and at rest. We&apos;re also SOC 2 Type II certified and comply with all major financial regulations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I cancel my subscription anytime?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, you can cancel your subscription at any time with no cancellation fees. Your data will remain accessible for 30 days after cancellation, giving you time to export if needed.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you offer discounts for annual billing?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! Annual billing saves you 20% compared to monthly billing. You&apos;ll get 2 months free when you choose to pay annually.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What integrations do you support?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We integrate with over 10,000 financial institutions, as well as popular tools like QuickBooks, Xero, Stripe, and many more. Custom integrations are available on Enterprise plans.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Is there a mobile app?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, we have native iOS and Android apps that sync seamlessly with the web platform. All features are available on mobile with an optimized, user-friendly interface.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-16 lg:py-24">
        <motion.div
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-16 lg:px-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative z-10 mx-auto max-w-2xl text-center text-white">
            <motion.h2
              className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Ready to take control of your finances?
            </motion.h2>
            <motion.p
              className="mb-8 text-lg text-orange-50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Join thousands of satisfied users and start your journey to financial success today. Get started with a 14-day free trial.
            </motion.p>
            <motion.div
              className="flex flex-col gap-3 sm:flex-row sm:justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 transition-all hover:scale-105 font-bold">
                Get started now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-orange-600 bg-white hover:bg-orange-50 transition-all hover:scale-105 font-bold">
                Schedule a demo
              </Button>
            </motion.div>
          </div>
          <div className="absolute inset-0 bg-grid-white/10" />
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500">
                  <span className="text-lg font-bold text-white">A</span>
                </div>
                <span className="text-xl font-semibold">UILD</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Empowering businesses with cutting-edge financial analytics and management tools.
              </p>
              <div className="flex gap-3">
                <Button size="icon" variant="ghost" className="transition-all hover:scale-110 hover:text-orange-500">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost" className="transition-all hover:scale-110 hover:text-orange-500">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost" className="transition-all hover:scale-110 hover:text-orange-500">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost" className="transition-all hover:scale-110 hover:text-orange-500">
                  <Instagram className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="mb-4 font-semibold">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-orange-500">Features</a></li>
                <li><a href="#" className="hover:text-orange-500">Pricing</a></li>
                <li><a href="#" className="hover:text-orange-500">Security</a></li>
                <li><a href="#" className="hover:text-orange-500">Integrations</a></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-semibold">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-orange-500">About us</a></li>
                <li><a href="#" className="hover:text-orange-500">Careers</a></li>
                <li><a href="#" className="hover:text-orange-500">Blog</a></li>
                <li><a href="#" className="hover:text-orange-500">Press</a></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-semibold">Contact</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>hello@uild.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>San Francisco, CA</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t pt-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-sm text-muted-foreground">
                &copy; 2025 UILD. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm text-muted-foreground">
                <a href="#" className="hover:text-orange-500">Privacy Policy</a>
                <a href="#" className="hover:text-orange-500">Terms of Service</a>
                <a href="#" className="hover:text-orange-500">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { Award, Users, Utensils } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="mediumLargeSizeMediumTitles"
        background="fluid"
        cardStyle="gradient-bordered"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="solid"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        { name: "Home", id: "home" },
        { name: "Story", id: "about" },
        { name: "Experience", id: "features" },
        { name: "Menu", id: "products" },
        { name: "Reservations", id: "contact" },
      ]}
      brandName="Koshy's Legacy"
    />
  </div>

  <div id="home" data-section="home">
      <HeroBillboardTestimonial
      useInvertedBackground={false}
      background={{ variant: "gradient-bars" }}
      title="A Timeless Tradition of Heritage Dining"
      description="Step into a world where every meal is a conversation, inspired by the calm brunch culture and old-world elegance of classic Bangalore."
      testimonials={[
        { name: "Ayesha Khan", handle: "Food Critic", testimonial: "Culture Weekly", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/group-friends-eating-restaurant_23-2148395390.jpg" },
        { name: "Vikram Sethi", handle: "Historian", testimonial: "Heritage Trust", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/young-beautiful-multiracial-woman-with-blonde-afro-hairstyle-braids-zizi-street-cafe-with-headphones-yellow-sunglasses-bright-makeup-hippie-style_1321-2069.jpg" },
        { name: "Nisha Reddy", handle: "Travel Writer", testimonial: "Globe Trotter", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/young-waiter-wearing-protective-face-mask-while-serving-food-his-guests-restaurant_637285-6633.jpg" },
        { name: "Sanjay Nair", handle: "Entrepreneur", testimonial: "Local Startups", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/pretty-happy-blonde-hipster-woman-eating-tasty-raspberry-dessert-cake-sitting-cute-bakery-enjoy-her-meal-sweet-breakfast-diet-nutrition-concept_291049-2281.jpg" },
        { name: "Meera Joshi", handle: "Art Enthusiast", testimonial: "Gallery Central", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-women-with-coffee-cups_23-2149461710.jpg" },
      ]}
      buttons={[{ text: "Reserve a Table", href: "#contact" }]}
      imageSrc="http://img.b2bpic.net/free-photo/restaurant-table-with-two-couches-near-window_140725-8459.jpg"
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/portrait-smiling-brunette-woman-drinks-morning-coffee-cafe_613910-12128.jpg", alt: "Portrait of smiling brunette woman drinks morning coffee in a cafe." },
        { src: "http://img.b2bpic.net/free-photo/confident-asian-businesswoman-showing-thumbs-up-standing-near-entrance-her-cafe-restaurant_1258-199354.jpg", alt: "Confident asian businesswoman showing thumbs up standing near entrance of her cafe or restaurant" },
        { src: "http://img.b2bpic.net/free-photo/young-woman-drinking-coffee-urban-cafe_158595-685.jpg", alt: "Young woman drinking coffee in urban cafe" },
        { src: "http://img.b2bpic.net/free-photo/young-woman-sitting-indoor-urban-cafe_158595-670.jpg", alt: "Young woman sitting indoor in urban cafe" },
        { src: "http://img.b2bpic.net/free-photo/portrait-interracial-young-couple-sitting-outdoor-cafe_23-2148151923.jpg", alt: "Portrait of interracial young couple sitting at outdoor cafe" },
      ]}
      avatarText="Join 5,000+ satisfied guests"
      marqueeItems={[
        { type: "text", text: "Vintage Charm" },
        { type: "text", text: "Heritage Flavors" },
        { type: "text", text: "Authentic Recipes" },
        { type: "text", text: "Warm Hospitality" },
        { type: "text", text: "Timeless Ambiance" },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={true}
      title="Preserving the Soul of Old Bangalore"
      description="For decades, we have been the silent witness to evolving city stories. Our heritage architecture and warm amber lighting create a sanctuary of calm amidst the bustling urban landscape."
      metrics={[{ value: "1985", title: "Established" }, { value: "50K+", title: "Meals Served" }, { value: "3", title: "Generations" }]}
      imageSrc="http://img.b2bpic.net/free-photo/modern-dining-london-table-empty_1203-4494.jpg"
      mediaAnimation="blur-reveal"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardNineteen
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        { tag: "Culinary", title: "Timeless Recipes", subtitle: "Crafted with care", description: "Authentic recipes preserved through generations for that signature nostalgic taste.", imageSrc: "http://img.b2bpic.net/free-photo/carrot-soup-with-garlic-bread-bowl-garnished-with-cheese_140725-6535.jpg" },
        { tag: "Ambiance", title: "Amber Warmth", subtitle: "Old-world lighting", description: "Sunlight filtered through wooden lattices, creating a calm and intimate dining atmosphere.", imageSrc: "http://img.b2bpic.net/free-photo/vertical-shot-lit-lightbulbs-electrical-wire-near-wooden-fence_181624-1887.jpg" },
        { tag: "Hospitality", title: "Gracious Service", subtitle: "Classic care", description: "Attentive, old-school hospitality that makes every guest feel like a regular.", imageSrc: "http://img.b2bpic.net/free-photo/view-vintage-metallic-cutlery_23-2150315232.jpg" },
      ]}
      title="A Symphony of Classic Flavors"
      description="Experience a brunch culture refined by time, where every detail is a nod to our glorious past."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="split-description"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      products={[
        { id: "p1", brand: "Signature", name: "Classic Breakfast", price: "₹450", rating: 5, reviewCount: "120", imageSrc: "http://img.b2bpic.net/free-photo/grilled-salmon-steak-with-grilled-vegetables-lemon-rosemary-homemade-lemonade-bread-table_140725-10845.jpg" },
        { id: "p2", brand: "Heritage", name: "Artisan Coffee", price: "₹150", rating: 5, reviewCount: "95", imageSrc: "http://img.b2bpic.net/free-photo/hot-california-sushi-rolls-with-red-caviar_114579-2128.jpg" },
        { id: "p3", brand: "Bakery", name: "Fresh Pastries", price: "₹250", rating: 4, reviewCount: "80", imageSrc: "http://img.b2bpic.net/free-photo/white-fruit-platter-isolated-black-surface-with-herbs_114579-12173.jpg" },
        { id: "p4", brand: "Signature", name: "Golden Omelette", price: "₹350", rating: 5, reviewCount: "150", imageSrc: "http://img.b2bpic.net/free-photo/lamb-chicken-burger-without-top-bun-with-mushroom-herbs-tomato-sauce_140725-8320.jpg" },
        { id: "p5", brand: "Brunch", name: "Garden Salad", price: "₹400", rating: 4, reviewCount: "65", imageSrc: "http://img.b2bpic.net/free-photo/fried-meat-with-vegetables-white-bread_140725-2110.jpg" },
        { id: "p6", brand: "Bakery", name: "Warm Scones", price: "₹200", rating: 5, reviewCount: "110", imageSrc: "http://img.b2bpic.net/free-photo/delicious-indian-dosa-assortment_23-2149086043.jpg" },
      ]}
      title="Our Signature Menu"
      description="A curated collection of culinary staples that defined our heritage café culture."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="scale-rotate"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      metrics={[
        { id: "m1", value: "150+", title: "Daily Guests", description: "Welcoming friends old and new.", icon: Users },
        { id: "m2", value: "500+", title: "Recipes", description: "Curated culinary traditions.", icon: Utensils },
        { id: "m3", value: "20", title: "Awards", description: "Recognized for quality.", icon: Award },
      ]}
      title="Legacy in Numbers"
      description="Evidence of the enduring love our guests have shown across the years."
    />
  </div>

  <div id="testimonial" data-section="testimonial">
      <TestimonialCardOne
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      animationType="blur-reveal"
      useInvertedBackground={true}
      testimonials={[
        { id: "1", name: "Ayesha Khan", role: "Food Critic", company: "Culture Weekly", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/women-with-burgers-drinks-sitting-table_23-2148975051.jpg" },
        { id: "2", name: "Vikram Sethi", role: "Historian", company: "Heritage Trust", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-sitting-table_23-2149684348.jpg" },
        { id: "3", name: "Nisha Reddy", role: "Travel Writer", company: "Globe Trotter", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-young-woman-eating-chocolate-muffin-paper-holder_23-2147974666.jpg" },
        { id: "4", name: "Sanjay Nair", role: "Entrepreneur", company: "Local Startups", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/young-woman-drinking-coffee-urban-cafe_158595-686.jpg" },
        { id: "5", name: "Meera Joshi", role: "Art Enthusiast", company: "Gallery Central", rating: 5, imageSrc: "http://img.b2bpic.net/free-vector/watercolor-patterns-pirate-elements_23-2147629461.jpg" },
      ]}
      title="Words from Our Guests"
      description="Stories and memories shared by our loyal patrons over breakfast and afternoon tea."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        { id: "q1", title: "Do I need a reservation?", content: "For brunch and weekends, we highly recommend booking in advance." },
        { id: "q2", title: "Are you pet friendly?", content: "Our heritage indoor space is strictly for human patrons, but our courtyard is welcoming." },
        { id: "q3", title: "Is the menu gluten-free?", content: "We offer several traditional dishes that can be prepared with gluten-free ingredients." },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/stylish-man-cafe-checking-time_23-2147689261.jpg"
      title="Frequently Asked"
      description="Common inquiries about our history, reservation process, and café etiquette."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{ variant: "gradient-bars" }}
      tag="Reservations"
      title="Secure Your Heritage Experience"
      description="Fill out the form below to book your table or for any inquiries regarding event bookings."
      imageSrc="http://img.b2bpic.net/free-photo/still-life-vintage-writing-love-letter_23-2150784486.jpg"
      mediaAnimation="blur-reveal"
      mediaPosition="left"
      inputPlaceholder="Your Email Address"
      buttonText="Book Table"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Restaurant",          items: [
            { label: "About Us", href: "#about" },
            { label: "Menu", href: "#products" },
            { label: "Contact", href: "#contact" },
          ],
        },
        {
          title: "Legal",          items: [
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" },
          ],
        },
      ]}
      bottomLeftText="© 2024 Koshy's Legacy. All rights reserved."
      bottomRightText="123 Bangalore St, Old Town"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

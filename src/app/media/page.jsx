'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Search, Calendar, ExternalLink, Tag, Filter } from 'lucide-react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const mediaArticles = [
  {
    id: 1,
    title: "Histare Unveils The Erbe Project",
    date: "September 23, 2024",
    excerpt: "The Histare Group is committed to empowering communities, protecting the environment, and celebrating India's rich and diverse heritage.",
    category: "Project Launch",
    tags: ["Erbe Project", "Heritage", "Community"],
    image: "/images/media/hindustan_times.jpg",
    link: "https://www.hindustantimes.com/brand-stories/histare-unveils-the-erbe-project-101727087388509.html"
  },
  {
    id: 2,
    title: "IIAD partners with Histare Group for Khakhan Batik showcase in New Delhi",
    date: "September 23, 2024",
    excerpt: "The Indian Institute of Art and Design partnered with The Histare Group to hold an exhibition in New Delhi of 'Khakhan' Batik textiles from the Kachch region, made by IIAD students.",
    category: "Partnership",
    tags: ["IIAD", "Khakhan", "Batik", "Exhibition"],
    image: "/images/media/fashion_network.jpg",
    link: "https://in.fashionnetwork.com/news/Iiad-partners-with-histare-group-for-khakhan-batik-showcase-in-new-delhi,1664689.html"
  },
  {
    id: 3,
    title: "IIAD Students Showcase Lesser Known Khakhan – Batik Craft of Kachchh for The Erbe Project",
    date: "September 23, 2024",
    excerpt: "Celebrating 2024-25 as the International Year of Batik, Indian Institute of Art and Design (IIAD) partnered with The Histare Group to present an exclusive exhibition showcasing KHAKHAN, the Batik of Kachch.",
    category: "Exhibition",
    tags: ["IIAD", "Khakhan", "Batik", "Kachchh", "Mercedes-Benz"],
    image: "/images/media/business_news_this_week.jpg",
    link: "https://businessnewsthisweek.com/business/iiad-students-showcase-lesser-known-khakhan-batik-craft-of-kachchh-for-the-erbe-project-in-collaboration-with-the-histare-group/"
  },
  // {
  //   id: 4,
  //   title: "Unveiling India's Craft Renaissance: Histare and PubliqueSpace Lead Charge in Cultural Revival",
  //   date: "April 02, 2024",
  //   excerpt: "Indian history is replete with the mysteries and magnificence of Indian arts and craft. From ornate jewellery to intricate sculptures, they reflect the diverse cultures of the country...",
  //   category: "Cultural Initiative",
  //   tags: ["Craft Renaissance", "PubliqueSpace", "Cultural Revival", "The Week"],
  //   image: "/images/media/the_week_logo.jpg",
  //   link: "#"
  // },
  {
    id: 5,
    title: "Cultural Innovation in the Creative Economy",
    date: "January 26, 2024",
    excerpt: "Mr. Akhil Vadehra, CEO of Histare, was invited to the Republic Day Celebrations as a part of cultural innovation initiatives in the creative economy.",
    category: "Recognition",
    tags: ["Republic Day", "Akhil Vadehra", "Creative Economy"],
    image: "/images/media/republic_day_celebrations.jpg",
    link: "#"
  },
  {
    id: 6,
    title: "The Histare Group envisions India's Creativity through disruptive methodologies",
    date: "March 30, 2021",
    excerpt: "The Histare Group is a new-age organization that envisions formulating value-based relationships to synergize the combined potential focussed on creating sustainable solutions for exponential cultural and business growth.",
    category: "Vision",
    tags: ["Innovation", "Methodology", "Sustainability"],
    image: "/images/media/mint.jpg",
    link: "https://www.livemint.com/brand-post/the-histare-group-will-shape-india-s-creativity-through-disruptive-methodologies-11617105025892.html"
  },
  {
    id: 7,
    title: "Noida International Literature Festival",
    date: "October 09, 2017",
    excerpt: "A unique celebration of the written words, celebrating the literature and writers from across the globe. The festival took place against the stunning backdrop of Noida city.",
    category: "Event",
    tags: ["Literature", "Festival", "Noida"],
    image: "/images/media/travel_and_deal.jpg",
    link: "https://api.blogtagwordtabapp.monster/?rt=650985a7b3981ee5255d2ac0ed4e046c"
  },
  {
    id: 8,
    title: "Collectors' Affaire",
    date: "May, 2017",
    excerpt: "Akhil Vadehra, Daljit Sean Singh and Sahil Madan hosted an evening with Splurge at Taksim, Ansal Plaza, with curated art pieces from galleries like The Egg Studio, Delhi.",
    category: "Event",
    tags: ["Collectors", "Art", "Gallery", "Taksim"],
    image: "/images/media/outlook_splurge.jpg",
    link: "#"
  },
  {
    id: 9,
    title: "Unveiling India's Craft Renaissance: Histare and PubliqueSpace Lead Charge in Cultural Revival",
    date: "April 02, 2024",
    excerpt: "Indian history is replete with the mysteries and magnificence of Indian arts and craft. From ornate jewellery to intricate sculptures, they reflect the diverse cultures of the country...",
    category: "Cultural Initiative",
    tags: ["Craft Renaissance", "PubliqueSpace", "Cultural Revival", "The Week"],
    image: "/images/media/the_week_logo.jpg",
    link: "#"
  },
  {
    id: 10,
    title: "Collectors' Affaire at Taksim",
    date: "May 25, 2017",
    excerpt: "A unique occasion at the awesome Restro Bar Taksim, at Ansal Plaza in New Delhi, featuring curated art collections and meeting enterprising people in the art community.",
    category: "Event Coverage",
    tags: ["Collectors", "Taksim", "Art Community"],
    image: "/images/media/geekaul.jpg",
    link: "https://gcaffe.wordpress.com/2017/05/25/collectors-affair-at-taksim/"
  }
];

const categories = ['All', 'Project Launch', 'Partnership', 'Exhibition', 'Cultural Initiative', 'Recognition', 'Vision', 'Event', 'Event Coverage'];

export default function MediaPage() {
  const [filteredArticles, setFilteredArticles] = useState(mediaArticles);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  React.useEffect(() => {
    let filtered = mediaArticles;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(article => article.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    setFilteredArticles(filtered);
  }, [selectedCategory, searchQuery]);

  const ArticleCard = ({ article }) => (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-[#3c597B] text-white px-3 py-1 rounded-full text-xs font-medium">
            {article.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <Calendar className="w-4 h-4 mr-2" />
          {article.date}
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#3c597B] transition-colors">
          {article.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {article.excerpt}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.slice(0, 3).map(tag => (
            <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
              #{tag}
            </span>
          ))}
          {article.tags.length > 3 && (
            <span className="text-gray-400 text-xs">+{article.tags.length - 3} more</span>
          )}
        </div>
        
        <div className="flex justify-between items-center">
          <a
            href={article.link}
            className="inline-flex items-center text-[#3c597B] font-medium hover:text-[#2a4261] transition-colors"
          >
            Read more
            <ExternalLink className="w-4 h-4 ml-1" />
          </a>
          
          <button className="text-gray-400 hover:text-gray-600 transition-colors" suppressHydrationWarning={true}>
            <Tag className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
    <Navbar/>
    <div className="min-h-screen --bg-gray-50">
      {/* Header */}
      <div className="h-[100vh] --bg-red-200 --bg-white --shadow-sm flex align-center items-center">
        <div className="max-w-7xl mx-auto px-4 py-12 --bg-blue-200">
          <div className="text-center">
            <h1 
              className="text-5xl font-bold text-[#3c597B] mb-4"
              style={{ fontFamily: "Rofane", fontStyle: "italic" }}
            >
              <span className="italic">In The</span>{' '}
              <span className="not-italic">Spotlight</span>
            </h1>
            {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our latest initiatives, partnerships, and cultural projects that celebrate India's rich heritage and drive creative innovation
            </p> */}
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles, projects, and initiatives..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3c597B] focus:border-transparent text-lg"
              suppressHydrationWarning={true}
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center space-x-2 min-w-max">
            <Filter className="text-gray-400 w-5 h-5" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#3c597B] focus:border-transparent text-lg min-w-48"
              suppressHydrationWarning={true}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results count */}
        <div className="flex justify-between items-center mb-8">
          <p className="text-gray-600 text-lg">
            Showing {filteredArticles.length} of {mediaArticles.length} articles
          </p>
          
          {(searchQuery || selectedCategory !== 'All') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="text-[#3c597B] hover:text-[#2a4261] font-medium"
            >
              Clear all filters
            </button>
          )}
        </div>

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="bg-gray-200 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600 mb-6">
                We couldn't find any articles matching your search criteria. Try adjusting your filters or search terms.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="bg-[#3c597B] text-white px-6 py-3 rounded-lg hover:bg-[#2a4261] transition-colors"
              >
                View all articles
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Footer CTA */}
      {/* <div className="bg-[#3c597B] text-white py-16 mt-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Our Latest Initiatives</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our community to receive updates about new projects, exhibitions, and cultural initiatives
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-[#3c597B] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div> */}
    </div>
    <Footer/>
    </>
  );
}
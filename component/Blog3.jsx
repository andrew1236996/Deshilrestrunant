import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Facebook, Twitter, Instagram, Youtube, MessageCircle, Heart, Share2 } from 'lucide-react';

export default function Blog3() {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Daniel Adam",
      date: "10 May, 2025",
      content: "Collaboratively empower multifunctional e-commerce for prospective applications. Seamlessly productivate pluggable markets whereas synergistic scenarios.",
      avatar: "DA"
    }
  ]);

  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        author: "Guest User",
        date: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }),
        content: newComment,
        avatar: "GU"
      };
      setComments([...comments, comment]);
      setNewComment('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Blog Post Content */}
        <article className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Quickly build excellent data after turnkey content. Distinctively reconceptualize customized growth strategies via prospective 
              potentialities. Professionally pursue cutting-edge web-readiness vis-a-vis just in time infrastructures. Conveniently target client-
              based systems with turnkey sources.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-8">
              Collaboratively syndicate focused opportunities for interactive deliverables. Assertively initiate client-based infrastructures 
              through collaborative mindshare. Continually simplify edge meta-services.
            </p>
          </div>

          {/* Tags and Social */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-8 border-t border-gray-200">
            <div className="flex items-center gap-2 mb-4 sm:mb-0">
              <span className="text-sm font-medium text-gray-900">Tags:</span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700">
                Business Solution
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700">
                Growth Strategy
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-900">Social Icon:</span>
              <div className="flex items-center gap-2">
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-pink-600 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center text-gray-600 mb-2">
              <ChevronLeft className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Previous Post</span>
            </div>
            <div className="bg-gray-200 rounded h-24 flex items-center justify-center">
              <span className="text-gray-500 text-sm">Previous Post Preview</span>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-end text-gray-600 mb-2">
              <span className="text-sm font-medium">Next Post</span>
              <ChevronRight className="h-4 w-4 ml-2" />
            </div>
            <div className="bg-gray-200 rounded h-24 flex items-center justify-center">
              <span className="text-gray-500 text-sm">Next Post Preview</span>
            </div>
          </div>
        </div>

        {/* Author Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-gray-600 text-sm">Author</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">William Benjamin</h3>
              <p className="text-sm text-gray-600 mb-4">Author</p>
              <p className="text-gray-700 leading-relaxed">
                Re-engineer multimedia based internal or "organic" sources for progressive worlds. 
                Distinctively leverage existing economically sound total linkage whereas global best practices.
              </p>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            {comments.length} Comment{comments.length !== 1 ? 's' : ''}
          </h3>
          
          {/* Comments List */}
          <div className="space-y-6 mb-8">
            {comments.map((comment) => (
              <div key={comment.id} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-600 text-sm font-medium">{comment.avatar}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h4 className="font-medium text-gray-900">{comment.author}</h4>
                    <span className="text-sm text-gray-500">{comment.date}</span>
                    <button className="text-sm text-red-600 hover:text-red-700 font-medium">
                      Reply
                    </button>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{comment.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Add Comment Form */}
          <div className="border-t border-gray-200 pt-8">
            <h4 className="text-lg font-medium text-gray-900 mb-4">Leave a Comment</h4>
            <div className="space-y-4">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write your comment here..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-none"
                rows={4}
              />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors">
                    <Heart className="h-5 w-5" />
                    <span className="text-sm">Like</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                    <Share2 className="h-5 w-5" />
                    <span className="text-sm">Share</span>
                  </button>
                </div>
                <button
                  onClick={handleAddComment}
                  className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Post Comment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import Button from "./Button";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface EnquireModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquireModal({ isOpen, onClose }: EnquireModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    domainInterest: "Gen-AI Mastery",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/enquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit enquiry.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setError(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      domainInterest: "Gen-AI Mastery",
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleReset} title="Enquire for Enterprise Learning">
      {submitted ? (
        <div className="py-8 text-center flex flex-col items-center">
          <div className="h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
            <CheckCircle2 size={36} />
          </div>
          <h4 className="text-xl font-bold text-gray-900">Enquiry Received!</h4>
          <p className="mt-2 text-sm text-gray-600 max-w-xs leading-relaxed">
            Thank you, <span className="font-semibold">{formData.name}</span>. Our enterprise specialist will reach out to <span className="font-semibold">{formData.company}</span> shortly.
          </p>
          <Button variant="primary" className="mt-6 w-full" onClick={handleReset}>
            Done
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 rounded-xl bg-red-50 text-red-700 text-xs font-semibold flex items-center gap-2">
              <AlertCircle size={16} />
              <span>{error}</span>
            </div>
          )}

          <div>
            <label htmlFor="enquire-name" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              id="enquire-name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Sarah Jenkins"
              className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:border-[#1B76FF] focus:ring-2 focus:ring-blue-100 outline-none"
            />
          </div>

          <div>
            <label htmlFor="enquire-email" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
              Work Email *
            </label>
            <input
              id="enquire-email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="sarah@company.com"
              className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:border-[#1B76FF] focus:ring-2 focus:ring-blue-100 outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="enquire-company" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                Company Name *
              </label>
              <input
                id="enquire-company"
                type="text"
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Enterprise Corp"
                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:border-[#1B76FF] focus:ring-2 focus:ring-blue-100 outline-none"
              />
            </div>

            <div>
              <label htmlFor="enquire-phone" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                id="enquire-phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+1 (555) 000-0000"
                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:border-[#1B76FF] focus:ring-2 focus:ring-blue-100 outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="enquire-domain" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
              Domain Interest
            </label>
            <select
              id="enquire-domain"
              value={formData.domainInterest}
              onChange={(e) => setFormData({ ...formData, domainInterest: e.target.value })}
              className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:border-[#1B76FF] focus:ring-2 focus:ring-blue-100 outline-none bg-white"
            >
              <option value="Gen-AI Mastery">Gen-AI Mastery</option>
              <option value="Product & Innovation Hub">Product & Innovation Hub</option>
              <option value="Leadership Elevation">Leadership Elevation</option>
              <option value="Tech & Data Insights">Tech & Data Insights</option>
              <option value="Operations Excellence">Operations Excellence</option>
              <option value="Digital Enterprise">Digital Enterprise</option>
              <option value="Fintech Innovation Lab">Fintech Innovation Lab</option>
            </select>
          </div>


          <Button type="submit" variant="primary" className="w-full mt-6" disabled={loading}>
            {loading ? (
              <span className="flex items-center gap-2">
                <Loader2 size={18} className="animate-spin" /> Submitting...
              </span>
            ) : (
              "Submit Enquiry"
            )}
          </Button>
        </form>
      )}
    </Modal>
  );
}

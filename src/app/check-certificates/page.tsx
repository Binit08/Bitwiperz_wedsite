"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, FileText } from "lucide-react";
import Navbar from "@/components/Navbar/Navbar"; // Make sure your Navbar is imported

export default function CheckCertificates() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <h1 className="text-4xl font-bold text-indigo-600 mb-6 text-center">
          Check Certificates
        </h1>

        <p className="text-lg text-gray-700 max-w-2xl text-center mx-auto mb-10">
          Enter your certificate ID or upload your certificate file to verify its authenticity.
        </p>

        <div className="w-full max-w-md mx-auto">
          <Card className="shadow-lg rounded-2xl">
            <CardContent className="p-8">
              <label className="block mb-2 text-gray-700 font-medium">
                Certificate ID
              </label>
              <input
                type="text"
                placeholder="Enter certificate ID"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5" /> Verify
              </button>
            </CardContent>
          </Card>
        </div>

        <p className="mt-6 text-gray-500 text-sm flex items-center justify-center gap-2">
          <FileText className="w-4 h-4" /> Your certificate will be checked against our database.
        </p>
      </main>
    </div>
  );
}

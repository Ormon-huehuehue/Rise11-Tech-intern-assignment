"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calculator, MapPin, Languages, FileText, FileCode, Upload, Plus } from 'lucide-react'

export default function ClaimForm() {
  return (
    <div className="container mx-auto py-6 w-full px-8 bg-white rounded-3xl">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold">File your Claim.</h1>
        <p className="text-sm text-muted-foreground">(Approx 5 Minutes)</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-8">
        {/* Claim Value Section */}
        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Calculator className="h-5 w-5 text-blue-500" />
              Claim Value
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Contract Value</Label>
              <div className="flex gap-2">
                <Input type="number" placeholder="10,00.00" />
                <Select defaultValue="USD">
                  <SelectTrigger className="w-24">
                    <SelectValue placeholder="USD" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="USD">USD</SelectItem>
                    <SelectItem value="EUR">EUR</SelectItem>
                    <SelectItem value="GBP">GBP</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Claim Value</Label>
              <div className="flex gap-2">
                <Input type="number" placeholder="15,00.00" />
                <Select defaultValue="USD">
                  <SelectTrigger className="w-24">
                    <SelectValue placeholder="USD" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="USD">USD</SelectItem>
                    <SelectItem value="EUR">EUR</SelectItem>
                    <SelectItem value="GBP">GBP</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <p className="text-sm text-orange-500">150% of Contract Value</p>
            </div>
          </CardContent>
        </Card>

        {/* Place Section */}
        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <MapPin className="h-5 w-5 text-blue-500" />
              Place
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select the Place for proceedings" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="london">London</SelectItem>
                <SelectItem value="paris">Paris</SelectItem>
                <SelectItem value="newyork">New York</SelectItem>
              </SelectContent>
            </Select>
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Is the place for the proceedings the one mentioned in the agreement?</p>
              <RadioGroup defaultValue="no" className="flex gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="place-yes" />
                  <Label htmlFor="place-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="place-no" />
                  <Label htmlFor="place-no">No</Label>
                </div>
              </RadioGroup>
            </div>
          </CardContent>
        </Card>

        {/* Language Section */}
        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Languages className="h-5 w-5 text-blue-500" />
              Language
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select the language for proceedings" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="french">French</SelectItem>
                <SelectItem value="german">German</SelectItem>
              </SelectContent>
            </Select>
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Is the language for the proceedings the one mentioned in the agreement?</p>
              <RadioGroup defaultValue="no" className="flex gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="lang-yes" />
                  <Label htmlFor="lang-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="lang-no" />
                  <Label htmlFor="lang-no">No</Label>
                </div>
              </RadioGroup>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Statement Section */}
        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <FileText className="h-5 w-5 text-blue-500" />
              Statement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Textarea placeholder="Write your Statement Here" className="min-h-[00px]" />
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="h-8 w-8 text-blue-500 mb-2" />
                    <p className="text-sm text-gray-500">Upload a PDF</p>
                  </div>
                  <input type="file" className="hidden" accept=".pdf" />
                </label>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Agreement under Disputes Section */}
        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <FileCode className="h-5 w-5 text-blue-500" />
              Agreement under Disputes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50">
                <Upload className="h-8 w-8 text-blue-500 mb-2" />
                <p className="text-xs text-center text-gray-500">Upload the Contract<br />Max 2MB, PDF</p>
                <input type="file" className="hidden" accept=".pdf" />
              </div>
              <div className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50">
                <Upload className="h-8 w-8 text-blue-500 mb-2" />
                <p className="text-xs text-center text-gray-500">Arbitration Agreement<br />Max 2MB, PDF</p>
                <input type="file" className="hidden" accept=".pdf" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Documentation Section */}
        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <FileText className="h-5 w-5 text-blue-500" />
              Additional Documentation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50">
                <Upload className="h-8 w-8 text-blue-500 mb-2" />
                <p className="text-xs text-center text-gray-500">Upload the Contract<br />Max 2MB, PDF</p>
                <input type="file" className="hidden" accept=".pdf" />
              </div>
              <Button size="icon" variant="outline" className="rounded-full h-12 w-12 flex-shrink-0">
                <Plus className="h-6 w-6" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


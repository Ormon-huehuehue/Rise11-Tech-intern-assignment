"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calculator, MapPin, Languages, FileText, FileCode, Upload, Plus } from "lucide-react";
import { Langar } from "next/font/google";
import { useToast } from "@/hooks/use-toast"

const agreementUnderDisputes = ["Upload the contract", "Arbitration Agreement"];

export default function ClaimForm() {

  const { toast } = useToast()


  const [contractValue, setContractValue] = useState<string | number>("");
  const [claimValue, setClaimValue] = useState<number>(0);
  const [currency, setCurrency] = useState<string>("INR");
  const [place, setPlace] = useState("Delhi");
  const [language, setLanguage] = useState("");
  const [placeAgreement, setPlaceAgreement] = useState("no");
  const [languageAgreement, setLanguageAgreement] = useState("no");
  const [statement, setStatement] = useState("");


  const submitHandler = ()=>{

    if(contractValue == "" || claimValue==0){
      toast({
        title: "All Fields are necessary",
        description: "Make sure you fill all the fields and upload necessary files",
        variant : "destructive"
      })
    }

    if(statement == ""){
      toast({
        title: "All Fields are necessary",
        description: "Make sure you fill all the fields and upload necessary files",
        variant : "destructive"
      })
    }

    if(language == ""){
      toast({
        title: "All Fields are necessary",
        description: "Make sure you fill all the fields and upload necessary files",
        variant : "destructive"
      })
    }

  }

  return (
    <div className=" mx-auto px-4 sm:px-6 lg:px-8 pb-5">
      <div className="mb-6 text-center sm:text-left">
        <h1 className="text-xl sm:text-2xl font-semibold mb-2">File your Claim</h1>
        <p className="text-xs sm:text-sm text-muted-foreground">(Approx 5 Minutes)</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
        {/* Claim Value Section */}
        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
              <Calculator className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
              Claim Value
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label className="text-xs sm:text-sm">Contract Value</Label>
              <div className="flex gap-2">
                <Input 
                  type="number" 
                  placeholder="Enter amount" 
                  value={contractValue}
                  className="bg-background text-xs sm:text-sm" 
                  //@ts-ignore
                  onChange={(e) => {
                    setContractValue(e.target.value)
                    setClaimValue(Number(e.target.value)*1.5)
                  }}
                />
                <Select 
                  value={currency} 
                  onValueChange={setCurrency}
                >
                  <SelectTrigger className="w-20 sm:w-24 text-xs sm:text-sm">
                    <SelectValue placeholder="USD" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="USD">USD</SelectItem>
                    <SelectItem value="EUR">EUR</SelectItem>
                    <SelectItem value="INR">INR</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-xs sm:text-sm">Claim Value</Label>
              <div className="flex gap-2">
                <Input 
                  type="number" 
                  placeholder="Enter amount in contract value to find out the claim value" 
                  className="bg-background text-xs sm:text-sm" 
                  value={claimValue}
                  onChange={()=>{
                    console.log("Claim value changed haha : ", claimValue)
                  }}
                />
                <Select 
                  value={currency} 
                  onValueChange={setCurrency}
                >
                  <SelectTrigger className="w-20 sm:w-24 text-xs sm:text-sm">
                    <SelectValue placeholder="USD" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="USD">USD</SelectItem>
                    <SelectItem value="EUR">EUR</SelectItem>
                    <SelectItem value="INR">INR</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <p className="text-xs text-orange-500">150% of Contract Value</p>
            </div>
          </CardContent>
        </Card>

        {/* Place Section */}
        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
              Place
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Select 
              value={place} 
              onValueChange={setPlace}
            >
              <SelectTrigger className="text-xs sm:text-sm">
                <SelectValue placeholder="Select the Place for proceedings" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Delhi">Delhi</SelectItem>
                <SelectItem value="Gurgaon">Gurgaon</SelectItem>
                <SelectItem value="Chandigarh">Chandigarh</SelectItem>
              </SelectContent>
            </Select>
            <div className="space-y-2">
              <p className="text-xs sm:text-sm text-gray-500">
                Is the place for the proceedings the one mentioned in the agreement?
              </p>
              <RadioGroup 
                value={placeAgreement} 
                onValueChange={setPlaceAgreement} 
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="place-yes" />
                  <Label htmlFor="place-yes" className="text-xs sm:text-sm">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="place-no" />
                  <Label htmlFor="place-no" className="text-xs sm:text-sm">No</Label>
                </div>
              </RadioGroup>
            </div>
          </CardContent>
        </Card>

        {/* Language Section */}
        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
              <Languages className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
              Language
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Select 
              value={language} 
              onValueChange={setLanguage}
            >
              <SelectTrigger className="text-xs sm:text-sm">
                <SelectValue placeholder="Select the language for proceedings" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="hindi">hindi</SelectItem>
                <SelectItem value="haryanvi">haryanvi</SelectItem>
              </SelectContent>
            </Select>
            <div className="space-y-2">
              <p className="text-xs sm:text-sm text-gray-500">
                Is the language for the proceedings the one mentioned in the agreement?
              </p>
              <RadioGroup 
                value={languageAgreement} 
                onValueChange={setLanguageAgreement} 
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="lang-yes" />
                  <Label htmlFor="lang-yes" className="text-xs sm:text-sm">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="lang-no" />
                  <Label htmlFor="lang-no" className="text-xs sm:text-sm">No</Label>
                </div>
              </RadioGroup>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Statement Section */}
        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
              <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
              Statement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Textarea 
                placeholder="Write your Statement Here" 
                className="min-h-[100px] bg-background text-xs sm:text-sm" 
                value={statement}
                onChange={(e) => setStatement(e.target.value)}
              />
              <div className="flex items-center justify-center w-full">
                <UploadButton title="Upload a PDF" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Agreement under Disputes Section */}
        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
              <FileCode className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
              Agreement under Disputes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {agreementUnderDisputes.map((item, index) => (
                <UploadButton key={index} title={item} />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Additional Documentation Section */}
        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
              <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
              Additional Documentation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <UploadButton title="Upload the contract"/>
              <Button 
                size="icon" 
                variant="outline" 
                className="rounded-full h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0"
              >
                <Plus className="h-4 w-4 sm:h-6 sm:w-6" />
              </Button>
            </div>
            {/* submit button */}
            <div className = "flex py-5 justify-center w-full">
              <Button 
                variant="outline" 
                className="h-10 flex px-20 w-max font-montserrat"
                onClick={submitHandler}
                >
                <h1> Submit</h1>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

const UploadButton = ({ title }: { title: string }) => {
  return (
    <label className="flex flex-col bg-background items-center justify-center w-full h-24 sm:h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50">
      <div className="flex flex-col items-center justify-center pt-4 sm:pt-5 pb-4 sm:pb-6">
        <Upload className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500 mb-1 sm:mb-2" />
        <p className="text-[10px] text-center text-gray-500">{title}</p>
      </div>
      <input type="file" className="hidden" accept=".pdf" />
    </label>
  );
};
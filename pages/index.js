import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { useState } from 'react'


export default function Home() {
  const [displayedContentIndex, setDisplayedContentIndex] = useState(0);
  const [mobileNavShown, setMobileNavShown] = useState(false);
  const getBackgroundClass = () => {
    switch(displayedContentIndex) {
      case 0: return "bg-avatar";
      case 1: return "bg-private";
      case 2: return "bg-space";
      case 3: return "bg-physical";
      case 4: return "bg-luxury";
      default: return "bg-avatar";
    }
  
  
  }

  return (
    <div className="bg-black bg-blur">
      <div className={`overlay-nav bg-black w-full z-0 absolute inset-0 ${mobileNavShown ? 'block' : 'hidden'}`}>
        <div className="">
            <div className="flex flex-row justify-between p-6 mt-6">
                <div className="mobile-logo">
                    <Image src="/images/44-logo.svg" className="mobile-logo" width={200} height={200}/>
                </div>
                <div className="on-nav" onClick={() => {setMobileNavShown(!mobileNavShown)}}>
                    <Image src="/images/nav-button-gray.png" width={50} height={50}/>    
                </div>
               
            </div>
            <div className="flex flex-col justify-center align-center w-full">
              <div className="px-6 py-10">
                  <span className="text-white druk-bold topnav-item  on-nav-avatar" onClick={()=>{
                    setDisplayedContentIndex(0);
                    setMobileNavShown(!mobileNavShown);
                    }}>AVATARS</span>
              </div>
              <div className="px-6 py-10">
                  
                     
                <span className="text-white druk-bold topnav-item on-nav-private leading-6" onClick={()=>{ setDisplayedContentIndex(1);
                setMobileNavShown(!mobileNavShown);
                }}>PRIVATE MEMBERS CLUB</span>
                                       
              </div>
              <div className="px-6 py-10">
                  <span className="text-white druk-bold topnav-item  on-nav-space" 
                  onClick={()=>{ 
                    setDisplayedContentIndex(2);
                    setMobileNavShown(!mobileNavShown);
                  }}
                  >SPACE PODS</span>
              </div>
              {/* asdasd */}
              <div className="px-6 py-10">
                  <span className="text-white druk-bold topnav-item  on-nav-physical"
                  onClick={()=>{ 
                    setDisplayedContentIndex(3);
                    setMobileNavShown(!mobileNavShown);
                    }}
                  >FORGING</span>
              </div>
              <div className="px-6 py-10">
                  <span className="text-white druk-bold topnav-item   on-nav-luxury"
                  onClick={()=>{ setDisplayedContentIndex(4);
                    setMobileNavShown(!mobileNavShown);
                    }}
                  >RESIDENCES</span>
              </div>
            </div>
            <div className="my-10">
                <div className="on-box ">
                    <div className="on-box-top flex w-full justify-center align-center py-4">
                        <div className="flex w-full justify-between items-center px-4">
                                <div className="flex flex-row items-center">
                                    <Image src="/images/ozurapay.png" className="h-12 w-12 nav-ozura-img mr-5" width={100} height={100}/>
                                    <p className="text-white ozura-text-nav">
                                        Ozurapay
                                    </p>
                                </div>
                                <div className="">
                                    <button className="ozura-button-nav fk-grotesk-mono">
                                        BUY NFT
                                    </button>
                                </div>
                        </div>
                       
                    </div>
                    <div className="on-box-bot flex w-full justify-center items-center mt-4">
                        <div className="flex w-full">
                            <div className="grow">
                                <div className="justify-center text-center text-white">
                                <FontAwesomeIcon icon={faInstagram} className="fa-ozura"/>
                                </div>
                            </div>
                            <div className="grow">
                                <div className="justify-center text-center text-white">
                                <FontAwesomeIcon icon={faLinkedin} className="fa-ozura"/>
                                </div>
                            </div>
                            <div className="grow">
                                <div className="justify-center text-center text-white">
                                <FontAwesomeIcon icon={faDiscord} className="fa-ozura"/>
                                </div>
                            </div>
                            <div className="grow">
                                <div className="justify-center text-center text-white">
                                <FontAwesomeIcon icon={faTwitter} className="fa-ozura"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      
      <div className={`container-fluid w-full container-full h-full m-0 p-0 z-50 absolute inset-0 ${mobileNavShown ? 'hidden' : 'block'}`}>
          <div className={`container-bg h-full w-full m-0 p-0 ${getBackgroundClass()}`}>
              <div className={`container-row h-full mx-0 p-0`}>
                  
                  <div className="mx-16 pt-12 upper-nav"> 
                      <div className="float-left logo cursor-pointer">
                          <Image src="/images/44-logo.svg" className="" width={200} height={200}/>
                      </div>
                      <div className="float-right top-nav" onClick={() => {setMobileNavShown(!mobileNavShown)}}>
                          <Image src="/images/nav-button-black.png" className="topnav-button h-12 w-12 nav-ozura-img-d" width={100} height={100}/>
                      </div>
                      
                      
                    
                  </div>
                  
                  { displayedContentIndex === 0 &&
                    <div className="container-fluid container-body w-full flex items-end  body-avatar px-0 mx-0 pr-0 flex-end absolute bottom-36">
                        <div className="w-2/5 mx-0 pl-16 box-left avatar-box">
                            <div className="text-white">
                                <p className="druk-bold text-h1 inline">META</p>
                            </div>
                            <div className="text-white -mt-12 text-h2-c">
                                <p className="ogg-roman text-h2 inline">AVATARS</p>
                            </div>
                            <div className="text-white -mt-1 w-6/12 md:w-10/12 sm:w-full cb-text">
                                <p className="fk-grotesk text-d1">The beginning of a whole ecosystem for our private members, with quality-focused, high-end avatars, ready for the Metaverse</p>
                            </div>
                            <div className="text-black mt-4">
                                <button className="h1-button my-4 fk-grotesk-mono"> 
                                    GET EARLY ACCESS 
                                </button>
                            </div>
                        </div>
                        
                        <div className="w-3/5 mx-0 box-right pr-16 flex flex-col justify-center items-end lg:flex md:hidden sm:hidden">
                            <div className="box-top lg:flex md:hidden sm:hidden">
                                <div className="flex w-full items-center">
                                        <div className="grow">
                                            <Image src="/images/ozurapay.png" width={50} height={50} className="mx-0"/>
                                        </div>
                                        <div className="grow flex items-center pr-16">
                                            <p className="text-white ozura-text">
                                                Ozurapay
                                            </p>
                                        </div>
                                        <div className="grow">
                                            <button className="ozura-button fk-grotesk-mono ml-3">
                                                BUY NFT
                                            </button>
                                        </div>
                                </div>
                                <div className="flex w-full justify-items-center">
                                        <div className="grow">
                                            <div className="text-left text-white">
                                                <p className="fk-grotesk ozura-value">$28.1M</p>
                                                <p className="fk-grotesk-mono ozura-label text-opacity-50">MKT.CAP</p> 
                                            </div>
                                        </div>
                                        <div className="grow">
                                            <div className="text-center text-white ml-6"> 
                                                <p className="fk-grotesk ozura-value">$28.1M</p>
                                                <p className="fk-grotesk-mono ozura-label text-opacity-50">24H VOLUME</p> 
                                            </div>
                                        </div>
                                        <div className="grow">
                                            <div className="text-right text-white">
                                                <p className="fk-grotesk  ozura-value">$28.1M</p>  
                                                <p className="fk-grotesk-mono  ozura-label text-opacity-50 text-center ml-12">HOLDERS</p>  
                                            </div>
                                        </div>
                                    
                                </div>
                            </div>
                            <div className="box-bot lg:flex md:hidden sm:hidden">
                                <div className="flex w-full">
                                    <div className="grow">
                                        <div className="justify-center text-left text-white">
                                          
                                            <FontAwesomeIcon icon={faInstagram} className="fa-ozura"/>
                                        </div>
                                    </div>
                                    <div className="grow">
                                        <div className="justify-center text-right text-white">
                                            
                                            <FontAwesomeIcon icon={faLinkedin} className="fa-ozura"/>
                                        </div>
                                    </div>
                                    <div className="grow">
                                        
                                    </div>
                                    <div className="grow">
                                        
                                    </div>
                                    <div className="grow">
                                        <div className="justify-center text-left text-white">
                                          <FontAwesomeIcon icon={faDiscord} className="fa-ozura"/>
                                        </div>
                                    </div>
                                    <div className="grow">
                                        <div className="justify-center text-right text-white">
                                        <FontAwesomeIcon icon={faTwitter} className="fa-ozura"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                  }
                  {
                    displayedContentIndex === 1 && 
                    <div className="container-fluid container-body w-full flex  items-end body-private px-0 mx-0 pr-0 flex-end absolute bottom-36">
                        <div className="w-2/5 mx-0 pl-16 box-left ">
                            <div className="text-white">
                                <p className="druk-bold text-h1">PRIVATE</p>
                            </div>
                            <div className="text-white -mt-12 text-h2-c">
                                <p className="ogg-roman text-h2">MEMBERS</p>
                            </div>
                            <div className="text-white -mt-1 w-6/12 md:w-full sm:w-full cb-text pr-6">
                                <p className="fk-grotesk text-d1">We've partnered with one of the most exclusive restaurants in Miami to offer an after-hours private members only speakeasy experience. This will be the first in a number of ways you can use your Avatar IRL</p>
                            </div>
                            <div className="text-black mt-4">
                                <button className="h1-button my-4 fk-grotesk-mono"> 
                                    GET EARLY ACCESS 
                                </button>
                            </div>
                        </div>
                        <div className="w-3/5 mx-0 box-right pr-16 flex flex-col justify-center items-end lg:flex md:hidden sm:hidden">
                            <div className="box-top lg:flex md:hidden sm:hidden">
                                <div className="flex w-full items-center">
                                        <div className="grow">
                                            <Image src="/images/ozurapay.png" width={50} height={50} className="mx-0"/>
                                        </div>
                                        <div className="grow flex items-center pr-16">
                                            <p className="text-white ozura-text">
                                                Ozurapay
                                            </p>
                                        </div>
                                        <div className="grow">
                                            <button className="ozura-button fk-grotesk-mono ml-3">
                                                BUY NFT
                                            </button>
                                        </div>
                                </div>
                                <div className="flex w-full justify-items-center">
                                        <div className="grow">
                                            <div className="text-left text-white">
                                                <p className="fk-grotesk ozura-value">$28.1M</p>
                                                <p className="fk-grotesk-mono ozura-label text-opacity-50">MKT.CAP</p> 
                                            </div>
                                        </div>
                                        <div className="grow">
                                            <div className="text-center text-white ml-6"> 
                                                <p className="fk-grotesk ozura-value">$28.1M</p>
                                                <p className="fk-grotesk-mono ozura-label text-opacity-50">24H VOLUME</p> 
                                            </div>
                                        </div>
                                        <div className="grow">
                                            <div className="text-right text-white">
                                                <p className="fk-grotesk  ozura-value">$28.1M</p>  
                                                <p className="fk-grotesk-mono  ozura-label text-opacity-50 text-center ml-12">HOLDERS</p>  
                                            </div>
                                        </div>
                                    
                                </div>
                            </div>
                            <div className="box-bot lg:flex md:hidden sm:hidden">
                                <div className="flex w-full">
                                    <div className="grow">
                                        <div className="justify-center text-left text-white">
                                          
                                            <FontAwesomeIcon icon={faInstagram} className="fa-ozura"/>
                                        </div>
                                    </div>
                                    <div className="grow">
                                        <div className="justify-center text-right text-white">
                                            
                                            <FontAwesomeIcon icon={faLinkedin} className="fa-ozura"/>
                                        </div>
                                    </div>
                                    <div className="grow">
                                        
                                    </div>
                                    <div className="grow">
                                        
                                    </div>
                                    <div className="grow">
                                        <div className="justify-center text-left text-white">
                                          <FontAwesomeIcon icon={faDiscord} className="fa-ozura"/>
                                        </div>
                                    </div>
                                    <div className="grow">
                                        <div className="justify-center text-right text-white">
                                        <FontAwesomeIcon icon={faTwitter} className="fa-ozura"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                  }
                  
                  { displayedContentIndex === 2 &&
                    <div className="container-fluid container-body w-full flex justify-center items-end body-space px-0 mx-0 pr-0 flex-end absolute bottom-36">
                      <div className="w-full mx-0 px-16 box-left">
                          <div className="text-white">
                              <p className="druk-bold text-h1">SPACE</p>
                          </div>
                          <div className="text-white -mt-12 text-h2-c">
                              <p className="ogg-roman text-h2">PODS</p>
                          </div>
                          <div className="text-white w-2/5 -mt-1 cb-text cb-space-text">
                              <p className="fk-grotesk text-d1">Futuristic spaces with sprawling views of Miami. Customize and upgrade, to show off your NFT’s and hang out with fellow private members, in space. Powered by OnCyber</p>
                          </div>
                          <div className="text-black mt-4">
                              <button className="h2-button my-4 fk-grotesk-mono">
                                  COMING SOON
                              </button>

                              
                          </div>
                      </div>
                      
                  </div>
                  }
                  
                  {displayedContentIndex === 3 && 
                  <div className="container  container-body w-full  items-end body-physical px-0 mx-0 pr-0 flex-end absolute bottom-36">
                      <div className="w-5/5 mx-0 px-16 z-50 box-left float-left">
                          <div className="text-white">
                              <p className="druk-bold text-h1">PHYSICAL</p>
                          </div>
                          <div className="text-white -mt-12 text-h2-c">
                              <p className="ogg-roman text-h2">COLLECTIBLES</p>
                          </div>
                          <div className="text-white -mt-1 w-6/12 md:w-10/12 sm:w-10/12 cb-text pc-text">
                              <p className="fk-grotesk text-d1">Forge unique physical collectibles created from your Avatar, get that crazy jacket IRL</p>
                          </div>
                          <div className="text-black mt-4">
                              <button className="h2-button my-4 fk-grotesk-mono">
                                  COMING SOON
                              </button>
                          </div>
                      </div>
                      
                          <Image src="/images/physical-jacket.png" className="forging-jacket w-2/5" width={200} height={200}/>
                    
                      
                  </div>
                  }
                  
                  {

                    displayedContentIndex === 4 &&
                    <div className="container-fluid container-body w-full flex justify-center items-end body-luxury px-0 mx-0 pr-0 flex-end absolute bottom-36">
                      <div className="w-2/5 mx-0 pl-16 box-left sm:w-full">
                          <div className="text-white">
                              <p className="druk-bold text-h1">LUXURY</p>
                          </div>
                          <div className="text-white -mt-12 text-h2-c">
                              <p className="ogg-roman text-h2">RESIDENCES</p>
                          </div>
                          <div className="text-white -mt-1 w-6/12 cb-text pc-text">
                              <p className="fk-grotesk text-d1">Forty Four Miami Hotel & Residences will feature 44 fully-furnished luxury residences IRL with studios to two-bedroom floor plans plus penthouses. Private members get early access at pre-build stage</p>
                          </div>
                          <div className="text-black mt-4">
                              <button className="h1-button my-4 fk-grotesk-mono"> 
                                  GET EARLY ACCESS 
                              </button>
                          </div>
                      </div>
                      <div className="w-3/5 mx-0 box-right pr-16 flex flex-col justify-center items-end lg:flex md:hidden sm:hidden">
                            <div className="box-top lg:flex md:hidden sm:hidden">
                                <div className="flex w-full items-center">
                                        <div className="grow">
                                            <Image src="/images/ozurapay.png" width={50} height={50} className="mx-0"/>
                                        </div>
                                        <div className="grow flex items-center pr-16">
                                            <p className="text-white ozura-text">
                                                Ozurapay
                                            </p>
                                        </div>
                                        <div className="grow">
                                            <button className="ozura-button fk-grotesk-mono ml-3">
                                                BUY NFT
                                            </button>
                                        </div>
                                </div>
                                <div className="flex w-full justify-items-center">
                                        <div className="grow">
                                            <div className="text-left text-white">
                                                <p className="fk-grotesk ozura-value">$28.1M</p>
                                                <p className="fk-grotesk-mono ozura-label text-opacity-50">MKT.CAP</p> 
                                            </div>
                                        </div>
                                        <div className="grow">
                                            <div className="text-center text-white ml-6"> 
                                                <p className="fk-grotesk ozura-value">$28.1M</p>
                                                <p className="fk-grotesk-mono ozura-label text-opacity-50">24H VOLUME</p> 
                                            </div>
                                        </div>
                                        <div className="grow">
                                            <div className="text-right text-white">
                                                <p className="fk-grotesk  ozura-value">$28.1M</p>  
                                                <p className="fk-grotesk-mono  ozura-label text-opacity-50 text-center ml-12">HOLDERS</p>  
                                            </div>
                                        </div>
                                    
                                </div>
                            </div>
                            <div className="box-bot lg:flex md:hidden sm:hidden">
                                <div className="flex w-full">
                                    <div className="grow">
                                        <div className="justify-center text-left text-white">
                                          
                                            <FontAwesomeIcon icon={faInstagram} className="fa-ozura"/>
                                        </div>
                                    </div>
                                    <div className="grow">
                                        <div className="justify-center text-right text-white">
                                            
                                            <FontAwesomeIcon icon={faLinkedin} className="fa-ozura"/>
                                        </div>
                                    </div>
                                    <div className="grow">
                                        
                                    </div>
                                    <div className="grow">
                                        
                                    </div>
                                    <div className="grow">
                                        <div className="justify-center text-left text-white">
                                          <FontAwesomeIcon icon={faDiscord} className="fa-ozura"/>
                                        </div>
                                    </div>
                                    <div className="grow">
                                        <div className="justify-center text-right text-white">
                                        <FontAwesomeIcon icon={faTwitter} className="fa-ozura"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      
                  </div>
                  }
                  
                  
                  
                
                  <div className="text-white fixed bottom-0 w-full bot-nav bg-black h-1/12">
                      <div className="flex items-center justify-between h-full">
                          <div className={`h-full items-center w-full justify-center flex group cursor-pointer nav-item nav-avatar text-center ${displayedContentIndex === 0 && 'nav-active'}`} onClick={()=>setDisplayedContentIndex(0)}>
                              <p className="fk-grotesk-mono nav-a text-xs">
                                  AVATARS
                              </p>
                          </div>
                          <div className={`h-full items-center w-full justify-center flex group cursor-pointer nav-item nav-avatar text-center ${displayedContentIndex === 1 && 'nav-active'}`}  onClick={()=>setDisplayedContentIndex(1)}>
                              <p className=" fk-grotesk-mono nav-a text-xs px-2">
                                  PRIVATE MEMBERS CLUB
                              </p>
                          </div>
                          <div className={`h-full items-center w-full justify-center flex group cursor-pointer nav-item nav-avatar text-center ${displayedContentIndex === 2 && 'nav-active'}`} onClick={()=>setDisplayedContentIndex(2)}>
                              <p className=" fk-grotesk-mono nav-a text-xs">
                                  SPACE PODS
                              </p>
                          </div>
                          <div className={`h-full items-center w-full justify-center flex group cursor-pointer nav-item nav-avatar text-center ${displayedContentIndex === 3 && 'nav-active'}`} onClick={()=>setDisplayedContentIndex(3)}>
                              <p className=" fk-grotesk-mono nav-a text-xs">
                                  FORGING
                              </p>
                          </div>
                          <div className={`h-full items-center w-full justify-center flex group cursor-pointer nav-item nav-avatar text-center ${displayedContentIndex === 4 && 'nav-active'}`} onClick={()=>setDisplayedContentIndex(4)}>
                              <p className=" fk-grotesk-mono nav-a text-xs">
                                  RESIDENCES
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          
          
      </div>
    </div>
    
  )
}

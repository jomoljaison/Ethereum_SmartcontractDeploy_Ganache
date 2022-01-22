// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract token
{
    struct tokenstruct
    {
    string  tokentype;
    string  tokenname;
    string  tokensymbol;
    uint  tokendecimal;
    uint tokensupply;
    address owneraddresss;
    string  sccode;

    }
        mapping(string => tokenstruct)tokendetails;
        mapping(address => string)generate;




    function createtoken(string memory tokentype,string memory tokenname,string memory tokensymbol,uint tokendecimal,uint tokensupply,address owneraddress)public  returns(bool)
    {
        tokendetails[tokenname].tokentype=tokentype;
        tokendetails[tokenname].tokenname=tokenname;
        tokendetails[tokenname].tokensymbol=tokensymbol;
        tokendetails[tokenname].tokendecimal=tokendecimal;
        tokendetails[tokenname].tokensupply=tokensupply;
        tokendetails[tokenname].owneraddresss=owneraddress;
        return true;
    }


    function gettoken(string memory tokenname)public view returns(string memory tokentype,string memory tokensymbol,uint tokendecimal,uint tokensupply,address owneraddress)
    {
        return (tokendetails[tokenname].tokentype,tokendetails[tokenname].tokensymbol,tokendetails[tokenname].tokendecimal,tokendetails[tokenname].tokensupply,tokendetails[tokenname].owneraddresss);

    }

    
    function generatesccode(string memory tokenname,string memory sccode)public{

        tokendetails[tokenname].sccode=sccode;

    }


}
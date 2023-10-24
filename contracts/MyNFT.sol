// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MyNFT is ERC721Enumerable, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    uint256 public maxNFTCount = 3000;
    string[] private _tokenURIs;

    constructor(string memory name, string memory symbol) ERC721(name, symbol) {}

    function mintNFT(address to, string memory tokenURI) external onlyOwner {
        require(totalSupply() < maxNFTCount, "Maximum NFT limit reached");
        uint256 tokenId = _tokenIdCounter.current();
        _mint(to, tokenId);
        _tokenIdCounter.increment();
        _tokenURIs.push(tokenURI);
    }

    function changeTokenURI(uint256 tokenId, string memory newTokenURI) external {
        require(_isApprovedOrOwner(msg.sender, tokenId), "You are not the owner of this NFT");
        _tokenURIs[tokenId] = newTokenURI;
    }

    function _baseURI() internal view override returns (string memory) {
        return "https://app.pinata.cloud/gateway/moccasin-casual-squirrel-542";
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(_exists(tokenId), "ERC721URIStorage: URI query for nonexistent token");
        string memory base = _baseURI();
        return bytes(base).length > 0 ? string(abi.encodePacked(base, _tokenURIs[tokenId])) : "";
    }
}



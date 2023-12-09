// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CatClub is ERC721 {
    uint256 private _nextTokenId;

    constructor() ERC721("CatClub", "CAT") {}

    function safeMint(address addr) public {
        uint256 tokenId = _nextTokenId++;
        _safeMint(addr, tokenId);
    }

    function tokenURI(
        uint256 _tokenId
    ) public view override returns (string memory) {
        _requireOwned(_tokenId);
        return
            "https://bafybeic3hhz5osh4ucgqn5mcm2yztislhmta2u5jobsiy5xwnranqezt6u.ipfs.nftstorage.link/7384.jpeg";
    }
}

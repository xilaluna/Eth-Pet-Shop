const _deploy_contracts = require("../migrations/2_deploy_contracts")

const Adoption = artifacts.require("Adoption")

contract("Adoption", (accounts) => {
  let adoption
  let expectedPetId

  before(async () => {
    adoption = await Adoption.deployed()
  })

  describe("Adopting a pet and getting account address", async () => {
    before("Adopt a pet using accounts[0]", async () => {
      await adoption.adopt(8, { from: accounts[0] })
      expectedAdopter = accounts[0]
    })

    it("Fetches the address of owner by pet ID", async () => {
      const adopter = await adoption.adopters(8)
      assert.equal(adopter, expectedAdopter)
    })

    it("Fetches all owner addresses", async () => {
      const adopters = await adoption.getAdopters()
      assert.equal(adopters[8], expectedAdopter)
    })
  })
})

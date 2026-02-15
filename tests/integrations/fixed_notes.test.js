const expect = require('expect.js')
const nock = require('nock')

const createFixedNoteResponse = require('../responses/create_fixed_note_200.json')
const getFixedNotesResponse = require('../responses/get_fixed_notes_200.json')

const Client = require('../../src/client')
const api = new Client({client_id: '****', client_secret: '****', embed_api_base_url: 'https://sandbox.embed.cowrywise.com/api/v1'});
const url = 'https://sandbox.embed.cowrywise.com/api/v1'


describe('Fixed Note functions work properly', function () {

    it('test_can_create_fixed_note', async function() {
      const fixedNoteData = {
        account_id: "acc_123",
        asset_code: "FN_123",
        tenor_in_months: "3",
        amount_range: "10M-100M"
      };
      nock(url)
        .post('/fixed-notes', fixedNoteData)
        .reply(200, createFixedNoteResponse);

      expect(await api.fixedNotes.createFixedNote(fixedNoteData)).to.eql(createFixedNoteResponse)
    })


    it('test_can_get_fixed_notes', async function() {
      nock(url)
        .get('/fixed-notes')
        .reply(200, getFixedNotesResponse);

      expect(await api.fixedNotes.getFixedNotes()).to.eql(getFixedNotesResponse)
    })


    it('test_can_partial_update_fixed_note', async function() {
      const updateData = {
        auto_reinvest: true
      };
      nock(url)
        .patch('/fixed-notes/fn_123', updateData)
        .reply(200, createFixedNoteResponse);

      expect(await api.fixedNotes.partialUpdate("fn_123", updateData)).to.eql(createFixedNoteResponse)
    })

})

describe('Api Adopet', () => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMTY0M2NkNi03MTEyLTQxNWItOTVkMi0wNzkwNGIwZDFhMWMiLCJhZG9wdGVyTmFtZSI6IkFuYSBkZSBKZXN1cyIsImlhdCI6MTc0NTAyMjY0MiwiZXhwIjoxNzQ1MjgxODQyfQ.xnEJLZiwtSaEFx6ptzXcYqVRElRlvk604GST5ODXtIs`

    it('Mensagens da API', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-frontend-cypress.vercel.app/static/media/message-hover.585ef151de5fe106e8eb.svg',
            headers: {authorization}
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
        })
    })
})
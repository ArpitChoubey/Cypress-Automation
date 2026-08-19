describe('mysuite', () =>
{
    it('Capture screenshots & Videos', () =>
    {
        cy.visit("https://sparklecartonline.com/");
        cy.screenshot("HomePage");
         cy.wait(5000);
         cy.get("//span[normalize-space()='Track Order']").screenshot("TrackOrder");




         //Automatically capture screenshot & video on failure - only when you execute through CLI
         // cmd --- npx cypress run --spec cypress\e2e\CaptureScreenshotandVideos.cy.js

       cy.get("//span[normalize-space()='Contact']").click(); 
        cy.get("//h1[normalize-space()='Contact']").should('have.text',"Tablets");
    })
})

// example of a test group
// note: all tests under the test directory are ran

describe('webdriver.io page', ()=> {

  it('should have the right title - the fancy generator way', ()=> {
    browser.url('http://webdriver.io');
    browser.getTitle().should.be.equal('WebdriverIO - Selenium 2.0 javascript bindings for nodejs');
  });

  it('does "What-is-WebdriverIO" link exsist?', ()=> {
    browser.url('http://webdriver.io');
    browser.getText('#What-is-WebdriverIO').should.be.equal('What is WebdriverIO?');
  });

  it('All links should point to an exsiting page', ()=> {
    browser.url('http://webdriver.io');
    const links = browser.elements('a');

    const testLink = ({ELEMENT}) => {
      const href = browser.elementIdAttribute(ELEMENT,'href');
      let status = true;

      console.log(href.value);

      fetch(href.value)
        .then( function(){
        })
        .catch( function(){
          status = false;
        });

      expect(status).to.be.true;
    };

    links.values.map(testLink);

  });
});

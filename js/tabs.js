class Tabs {
  containerElement;
  constructor(options) {
    const { container, panels } = options;
    this.setContainer(container);
    this.buildMain(panels);
  }

  setContainer(containerID) {
    if(!containerID) {
      console.error('NO container ID passed');

    }
      this.containerElement = document.getElementById(containerID);
      if(!this.containerElement) {
        console.error('NO element matches the passed ID');
      }
    }

  buildMain(panels) {
    if (!this.containerElement) {
      return;
    }
      this.containerElement.innerHTML = `
      <div class="tabs">
        <nav>
            <ul class="tabs__nav">
                ${this.setPanels(panels)}
            </ul>
        </nav>
        <div class="tabs__body">
            ${this.setContent(panels)}      
        </div>
      </div>
      <div class="tabs__add">

      </div>
`;
    this.setActive();

  }

  setActive() {
    let allTabs = options.panels;
    // let activeState = options.panels.active;
    let activeTabs = document.getElementsByTagName('li');
    let contentState = document.getElementsByClassName('tab');


    for (let i = 0; i < allTabs.length; i++) {

      let activeState = allTabs[i].active;

      if(!activeState) {
        activeTabs[0].classList.add('active');
        contentState[0].classList.add('active');
      } else {
        let index = allTabs.findIndex(x => x.active);
        console.log(index);
        activeTabs[i] = index;
        Array.from(activeTabs).forEach(item => {
          item.classList.add('active');
        })
      };
        activeTabs[i].addEventListener('click', function () {
          Array.from(activeTabs).forEach(item => {
            item.classList.remove('active');
          });
          activeTabs[i].classList.add('active');
          Array.from(contentState).forEach(item => {
            item.classList.remove('active');
          });
          contentState[i].classList.add('active');
        });
      }
    }



  setPanels(panels) {
    if(!panels) {
      return `no panels`;
    }
    let bodyHTML = '';
    for (const panel of panels) {
      bodyHTML += `
       <li> 
       ${this.setPanelsLink(panel)}
      </li>
      `
    }
    return bodyHTML;
  }

  setPanelsLink(panel) {
    return `${panel.link}`
  }

  /*******************CONTENT*****************/

  setContent(panels) {
    if(!panels) {
      return '';
    }
    let bodyHTML = '';
    for (const panel of panels) {
      bodyHTML += `
        ${this.setPanelsContent(panel)}
      `
    }
    return bodyHTML;
  }

  setPanelsContent(panels) {
    return `
      <div class="tab">
        <div class="tab__content">
            ${panels.content}
        </div>
      </div> 
      `
  }

  addPanel(panel) {

   const allPanels = options.panels;
    allPanels.push(panel);
   // console.log(allPanels)

    this.buildMain(allPanels);
  }


  removePanel(index) {
    // Ако няма индекс - триеш последния таб


    // Ако има индекс - триеш таба с съответният индекс




    // const allPanels = document.getElementsByClassName();
    const allActivePanels = document.getElementsByClassName('active');
    // allActivePanels.childNodes.remove(allActivePanels);



    console.log(allActivePanels);
    // this.buildMain(allPanels)
  }

}

window.Tabs = Tabs;

/**
*
* */

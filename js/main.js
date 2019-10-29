class Accordion {
  containerElement;
  constructor(options) {
    const { container, mainTitle, panels } = options;
    this.setContainer(container);
    this.buildMain(mainTitle, panels);
  }

  setContainer(containerID) {
    if (!containerID) {
      console.error('NO element ID was passed!');
      return;
    }
    this.containerElement = document.getElementById(containerID);
    if (!this.containerElement) {
      console.error('NO element matches the passed ID!');
    }
  }

  buildMain(mainTitle, panels) {
    if (!this.containerElement) {
      return;
    }
    this.containerElement.innerHTML = `
       <div class="accordion">
           ${this.setTitle(mainTitle)}
           <div class="accordion-body">
           ${this.setPanels(panels)}
           </div>
       </div>`;
    this.addClickHandlers();
  }

  setTitle(title) {
    if (!title) {
      return '';
    }
    return `
           <div class="title-panel accordion-panel">
               <div class="accordion-title">
                   ${title}
               </div>
           </div>
       `;
  }

  setPanels(panels) {
    let bodyHTML = '';
    for (const panel of panels) {
      bodyHTML += `
               <div class="accordion-panel">
                   <div class="panel-header">
                       ${this.setPanelTitle(panel.title)}
                       ${this.setPanelSubtitle(panel.subtitle)}
                       <div class="chevron">
                           <i class="material-icons">
                               expand_more
                           </i>
                       </div>
                   </div>
                   <div class="panel-body">
                       ${panel.content}
                   </div>
               </div>
           `;
    }
    return bodyHTML;
  }

  setPanelTitle(title) {
    return `
           <div class="panel-title">
               ${title}
           </div>
       `
  }

  setPanelSubtitle(subtitle) {
    if (!subtitle) {
      return '';
    }
    return `
           <div class="panel-subtitle">
               ${subtitle}
           </div>
       `;
  }

  addClickHandlers() {
    const panelHeaders = this.containerElement.querySelectorAll('.accordion-panel .panel-header');
    for (const header of panelHeaders) {
      header.addEventListener('click', () => {
        header.parentElement.classList.toggle('active');
      });
    }
  }
}
window.Accordion = Accordion;

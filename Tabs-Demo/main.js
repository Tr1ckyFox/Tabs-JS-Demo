var tabs = (function(){
    
    // default configuration
    var _defaults = {
        links: "tabs-nav-link",
        tabs: "c-tab",
        activeLink: "active-link",
        activeTab: "is-active"
    }
    
    // module options
    var config = {}
    
    // init function? initialize options and defaults
    var init = function(config) {

        // if config dont exist copy defaults to config
        if(!config) {
          config = _defaults;
        };
        
        // copy properties of `options` to `config`. 
        // It will overwrite existing ones.
        for(var prop in _defaults) {
            if(_defaults.hasOwnProperty(prop)){
                config[prop] = _defaults[prop];
            }
        }
        
        tabsChange(config);
    };
    
    // main function, thats change tabs and content
    var tabsChange = function(config){
      var linksList = document.querySelectorAll("." + config.links),
          tabsList  = document.querySelectorAll("." + config.tabs);
          
      linksList.forEach(function(item,i){
        // add events for click
        item.addEventListener("click", function(){
          
          // setup activeClass for link
          for(var l=0; l<linksList.length; l++) {
            linksList[l].classList.remove(config.activeLink)
          }
          item.classList.add(config.activeLink)
          
          // show active tab with content
          for(var k=0; k<tabsList.length; k++) {
             tabsList[k].classList.remove(config.activeTab);
             tabsList[i].classList.add(config.activeTab);
          };
          
        });
      });
      
    };
    
    // return public method
    return {
        init: init
    }
    
})();

tabs.init();
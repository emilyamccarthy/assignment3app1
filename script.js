

 require(["esri/views/MapView", "esri/WebMap"], (MapView, WebMap) => {
        /************************************************************
         * Creates a new WebMap instance. A WebMap must reference
         * a PortalItem ID that represents a WebMap saved to
         * arcgis.com or an on-premise portal.
         *
         * To load a WebMap from an on-premise portal, set the portal
         * url with esriConfig.portalUrl.
         ************************************************************/
        const webmap = new WebMap({
          portalItem: {
            // autocasts as new PortalItem()
            id: "09b017ad0fbf4656b2f20494f7bc706c"
          }
        });

        /************************************************************
         * Set the WebMap instance to the map property in a MapView.
         ************************************************************/
        const view = new MapView({
          map: webmap,
          container: "viewDiv"
        });
      });

  

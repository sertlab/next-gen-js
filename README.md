# Dotdigital ESM script wrapper

A ESM scrrip wrapepr to allow developer tointergarte dotdigital trackign and chat script weithin there SAP / PWA project easer that UDM syntax. 

We include Typescript Types for evey part of our pacakge. 

Commands:
=====

Build:

This will genreate a dist.browser directory

```Bash
npm run build
```

Docs:

This will generate API documentation allowing you to understand the package in more detail. 

```Bash
npm run docs
```

Tracking:
=========



### Avalable function: (TrackingModule.CallableTrackingFunctions)

*   create
*   track
*   identify
*   cartInsight
*   version

### Example:
```javascript
        import { TrackingModule } from './dist.browser/index.js';
        function runTracking()
        {
            const config = new TrackingModule.ConfigurationCollection();
            config.add({
                key:'region',
                value:"{YOUR REGION}"
            })
            const tracking = new TrackingModule.Tracking(config);


            tracking.call(CallableTrackingFunctions.create, [
                new TrackingModule.ModuleCallArgument('account_id', '{YOUR DD TRACKING ID}', ArgumentTypes.STRING)
            ])
            tracking.call(CallableTrackingFunctions.track, []);
            
        }

        runTracking();
```
Chat:
=====

### Avalable function: (ChatModule.CallableTrackingFunctions)

*   init

### Example:
```javascript
        import { TrackingModule, ChatModule } from './dist.browser/index.js';
        function runChat()
        {
            const config = new ChatModule.ConfigurationCollection();
            config.add({ 
                key:'apiSpace', 
                value:"{YOUR CHAT SPCAE ID}"
            })
            config.add({ 
                key:'urlBase', 
                value:"https://webchat.dotdigital.com"
            })
            const chat = new ChatModule.Chat(config);
            chat.call(ChatModule.CallableChatFunctions.init,[])
        }

        runChat()
```
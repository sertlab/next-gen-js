Tracking:
=========

### Avalable function: (TrackingModule.CallableTrackingFunctions)

*   create
*   track
*   identify
*   cartInsight
*   version

### Example:

    ```
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

   ```
    import { TrackingModule, ChatModule } from './dist.browser/index.js';

        function runChat()
        {
            const config = new ChatModule.ConfigurationCollection();
            config.add({ 
                key:'apiSpace', 
                value:"9{YOUR CHaT SPCAE ID}"
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

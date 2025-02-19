#import "React/RCTViewManager.h"

@interface RCT_EXTERN_MODULE(ReactNativeLivestreamViewManager, RCTViewManager)

RCT_EXPORT_VIEW_PROPERTY(liveStreamKey, NSString)
RCT_EXPORT_VIEW_PROPERTY(onStatusChange, RCTDirectEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onConnectionSuccess, RCTDirectEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onConnectionFailed, RCTDirectEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onDisconnect, RCTDirectEventBlock)
RCT_EXPORT_VIEW_PROPERTY(rtmpServerUrl, NSString)
RCT_EXPORT_VIEW_PROPERTY(videoFps, double)
RCT_EXPORT_VIEW_PROPERTY(videoResolution, NSString)
RCT_EXPORT_VIEW_PROPERTY(videoBitrate, double)
RCT_EXPORT_VIEW_PROPERTY(videoCamera, NSString)
RCT_EXPORT_VIEW_PROPERTY(videoOrientation, NSString)
RCT_EXPORT_VIEW_PROPERTY(audioMuted, BOOL)
RCT_EXPORT_VIEW_PROPERTY(audioBitrate, double)

RCT_EXTERN_METHOD(
    startStreamingFromManager:(nonnull NSNumber *)node
)
RCT_EXTERN_METHOD(
    stopStreamingFromManager:(nonnull NSNumber *)node
)

@end

<?php 
namespace OmekaTheme\Helper;

use Laminas\View\Helper\AbstractHelper;

class SortMedia extends AbstractHelper
{
    public function __invoke($files = null) 
    { 
        $sortedMedia = [];
        $whitelist = ['image/bmp', 'image/gif', 'image/jpeg', 'image/png', 'image/svg+xml', 'video/mp4'];
        $html5videos = [];
        $mediaCount = 0;

        foreach ($files as $media) {
            $mediaType = $media->mediaType();
            $mediaRenderer = $media->renderer();
            if (in_array($mediaType, $whitelist) || (strpos($mediaRenderer, 'youtube') !== false)) {
                $sortedMedia['lightMedia'][$mediaCount]['media'] = $media;
                if ($mediaType == 'video/mp4') {
                    $html5videos[$mediaCount] = pathinfo($media->source(), PATHINFO_FILENAME);
                    $sortedMedia['lightMedia'][$mediaCount]['tracks'] = [];
                }
                $mediaCount++;
            } else {
                $sortedMedia['otherMedia'][] = $media;
            }
        }
        if ((count($html5videos) > 0) && $sortedMedia['otherMedia']) {
            foreach ($html5videos as $fileId => $filename) {
                foreach ($sortedMedia['otherMedia'] as $key => $otherMedia) {
                    if ($otherMedia->source() == "$filename.vtt") {
                        $sortedMedia['lightMedia'][$fileId]['tracks'][] = $otherMedia;
                        unset($sortedMedia['otherMedia'][$key]);
                    }
                }
            }   
        }

        return $sortedMedia;
    }
}
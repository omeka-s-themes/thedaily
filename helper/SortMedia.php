<?php 
namespace OmekaTheme\Helper;

use Laminas\View\Helper\AbstractHelper;

class SortMedia extends AbstractHelper
{
    public function __invoke($files = null) 
    { 
        $sortedMedia = [];
        $whitelist = ['image/bmp', 'image/gif', 'image/jpeg', 'image/png', 'image/svg+xml'];

        foreach ($files as $media) {
            $mediaType = $media->mediaType();
            $mediaRenderer = $media->renderer();
            if (in_array($mediaType, $whitelist) || (strpos($mediaRenderer, 'youtube') !== false)) {
                $sortedMedia['lightMedia'][] = $media;
            } else {
                $sortedMedia['otherMedia'][] = $media;
            }
        }

        return $sortedMedia;
    }
}

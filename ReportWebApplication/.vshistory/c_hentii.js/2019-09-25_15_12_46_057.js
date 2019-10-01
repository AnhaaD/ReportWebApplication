﻿function setHentiшArea(area) {
    switch (area) {

        case 1:
            var Hentiy_Batnorov = [
                { lng: 111.956108093262, lat: 48.079761505127 },
                { lng: 111.947410583496, lat: 48.0705070495605 },
                { lng: 111.942306518555, lat: 48.0591812133789 },
                { lng: 111.942108154297, lat: 48.047737121582 },
                { lng: 111.949851989746, lat: 48.0181922912599 },
                { lng: 111.951591491699, lat: 47.9962272644044 },
                { lng: 111.948341369629, lat: 47.9750099182129 },
                { lng: 111.941780090332, lat: 47.9625854492188 },
                { lng: 111.920188903809, lat: 47.9421195983888 },
                { lng: 111.886581420898, lat: 47.903190612793 },
                { lng: 111.864692687988, lat: 47.8706855773926 },
                { lng: 111.844314575195, lat: 47.8460769653321 },
                { lng: 111.833114624023, lat: 47.8379211425781 },
                { lng: 111.788055419922, lat: 47.8139648437501 },
                { lng: 111.765441894531, lat: 47.7977485656739 },
                { lng: 111.740936279297, lat: 47.7739715576173 },
                { lng: 111.721618652344, lat: 47.7588386535646 },
                { lng: 111.713539123535, lat: 47.7482872009278 },
                { lng: 111.700958251953, lat: 47.7260742187501 },
                { lng: 111.680770874023, lat: 47.7052841186524 },
                { lng: 111.676727294922, lat: 47.6993408203126 },
                { lng: 111.671485900879, lat: 47.6858520507814 },
                { lng: 111.668853759766, lat: 47.6710395812989 },
                { lng: 111.669166564941, lat: 47.6315536499023 },
                { lng: 111.674331665039, lat: 47.6075935363769 },
                { lng: 111.692008972168, lat: 47.571891784668 },
                { lng: 111.636352539063, lat: 47.5765380859376 },
                { lng: 111.601684570313, lat: 47.577995300293 },
                { lng: 111.555130004883, lat: 47.577419281006 },
                { lng: 111.521354675293, lat: 47.5740203857422 },
                { lng: 111.500625610352, lat: 47.569248199463 },
                { lng: 111.462753295898, lat: 47.5569114685059 },
                { lng: 111.403198242188, lat: 47.5418739318848 },
                { lng: 111.342826843262, lat: 47.529109954834 },
                { lng: 111.284965515137, lat: 47.51904296875 },
                { lng: 111.245216369629, lat: 47.5027008056641 },
                { lng: 111.18856048584, lat: 47.4909553527833 },
                { lng: 111.14070892334, lat: 47.476978302002 },
                { lng: 111.118293762207, lat: 47.4734344482422 },
                { lng: 111.09497833252, lat: 47.4717063903809 },
                { lng: 111.023086547852, lat: 47.4709205627442 },
                { lng: 111.023468017578, lat: 47.5422286987306 },
                { lng: 111.02751159668, lat: 47.5809745788575 },
                { lng: 111.035118103027, lat: 47.6029014587403 },
                { lng: 111.052314758301, lat: 47.6283836364746 },
                { lng: 111.059341430664, lat: 47.6422271728516 },
                { lng: 111.063217163086, lat: 47.657341003418 },
                { lng: 111.064529418945, lat: 47.6728019714357 },
                { lng: 111.063598632813, lat: 47.6882629394532 },
                { lng: 111.060089111328, lat: 47.7033882141113 },
                { lng: 111.053405761719, lat: 47.7172546386719 },
                { lng: 111.03687286377, lat: 47.7428054809571 },
                { lng: 111.029960632324, lat: 47.7646217346191 },
                { lng: 111.027435302734, lat: 47.7954063415528 },
                { lng: 111.029304504394, lat: 47.8656272888185 },
                { lng: 111.027481079102, lat: 47.8952331542969 },
                { lng: 111.023429870605, lat: 47.9088478088379 },
                { lng: 111.015090942383, lat: 47.9208564758301 },
                { lng: 111.004058837891, lat: 47.9287719726563 },
                { lng: 110.967460632324, lat: 47.9499588012696 },
                { lng: 110.929504394531, lat: 47.97509765625 },
                { lng: 110.960510253906, lat: 47.9940795898439 },
                { lng: 110.974304199219, lat: 48.00390625 },
                { lng: 110.999877929688, lat: 48.0289306640626 },
                { lng: 111.019897460938, lat: 48.0443115234375 },
                { lng: 111.055114746094, lat: 48.0908813476562 },
                { lng: 111.078132629394, lat: 48.0929565429688 },
                { lng: 111.09309387207, lat: 48.0956764221193 },
                { lng: 111.099838256836, lat: 48.09769821167 },
                { lng: 111.130638122559, lat: 48.1112518310547 },
                { lng: 111.172348022461, lat: 48.1223449707031 },
                { lng: 111.185363769531, lat: 48.1298179626466 },
                { lng: 111.234741210937, lat: 48.1800575256348 },
                { lng: 111.24584197998, lat: 48.1879882812501 },
                { lng: 111.253532409668, lat: 48.1911773681641 },
                { lng: 111.270797729492, lat: 48.1951332092286 },
                { lng: 111.316993713379, lat: 48.1997795104982 },
                { lng: 111.334197998047, lat: 48.2028770446777 },
                { lng: 111.348068237305, lat: 48.2083435058594 },
                { lng: 111.380180358887, lat: 48.227481842041 },
                { lng: 111.390434265137, lat: 48.2354469299318 },
                { lng: 111.423500061035, lat: 48.2737350463867 },
                { lng: 111.447937011719, lat: 48.3090744018555 },
                { lng: 111.485641479492, lat: 48.3517303466798 },
                { lng: 111.506378173828, lat: 48.366397857666 },
                { lng: 111.529319763184, lat: 48.3897438049318 },
                { lng: 111.547897338867, lat: 48.4042549133302 },
                { lng: 111.5693359375, lat: 48.4181289672851 },
                { lng: 111.604225158691, lat: 48.4373512268066 },
                { lng: 111.628562927246, lat: 48.4439086914062 },
                { lng: 111.642669677734, lat: 48.4492340087891 },
                { lng: 111.661895751953, lat: 48.4595642089844 },
                { lng: 111.682662963867, lat: 48.4736442565919 },
                { lng: 111.702743530274, lat: 48.4538307189943 },
                { lng: 111.742416381836, lat: 48.4203872680665 },
                { lng: 111.768013000488, lat: 48.392219543457 },
                { lng: 111.78881072998, lat: 48.3782272338868 },
                { lng: 111.809715270996, lat: 48.3547134399415 },
                { lng: 111.82039642334, lat: 48.3453979492189 },
                { lng: 111.838912963867, lat: 48.3320426940918 },
                { lng: 111.859176635742, lat: 48.3197708129883 },
                { lng: 111.873329162598, lat: 48.3126068115236 },
                { lng: 111.908195495606, lat: 48.2983283996583 },
                { lng: 111.946884155274, lat: 48.2703628540039 },
                { lng: 111.954086303711, lat: 48.2589683532715 },
                { lng: 111.958419799805, lat: 48.2389526367188 },
                { lng: 111.959060668945, lat: 48.2097396850587 },
                { lng: 111.956108093262, lat: 48.079761505127 },
            ];

            var Hentiy_Batnorov_Polygon = new google.maps.Polygon({
                paths: Hentiy_Batnorov,
                strokeColor: '#66aa1a',
                strokeOpacity: 0.2,
                strokeWeight: 5,
                fillColor: '#66aa1a',
                fillOpacity: 0.35
            });

            return Hentiy_Batnorov_Polygon;
   
        default:
            return 'ok';
    }
}
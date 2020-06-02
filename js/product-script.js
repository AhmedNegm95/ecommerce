                                        jQuery(document).ready(function($) {
                                            var $tabs = $('.woocommerce-tabs-kt3l2ghgebm2ubdku5k95meksi16grj');

                                            $tabs.easyResponsiveTabs({
                                                type: 'default', //Types: default, vertical, accordion
                                                width: 'auto', //auto or any width like 600px
                                                fit: true, // 100% fit in a container
                                                activate: function(event) { // Callback function if tab is switched

                                                }
                                            });

                                            var $review_content = $tabs.find('#tab-reviews'),
                                                $review_title1 = $tabs.find('h2[aria-controls=tab_item-3]'),
                                                $review_title2 = $tabs.find('li[aria-controls=tab_item-3]');

                                            function goReviewTab(target) {
                                                var recalc_pos = false;
                                                if ($review_content.length && $review_content.css('display') == 'none') {
                                                    recalc_pos = true;
                                                    if ($review_title1.length && $review_title1.css('display') != 'none')
                                                        $review_title1.click();
                                                    else if ($review_title2.length && $review_title2.closest('ul').css('display') != 'none')
                                                        $review_title2.click();
                                                }

                                                var delay = recalc_pos ? 400 : 0;
                                                setTimeout(function() {
                                                    $('html, body').stop().animate({
                                                        scrollTop: target.offset().top - theme.StickyHeader.sticky_height - theme.adminBarHeight() - 14
                                                    }, 600, 'easeOutQuad');
                                                }, delay);
                                            }

                                            function goAccordionTab(target) {
                                                setTimeout(function() {
                                                    var label = target.attr('aria-controls');
                                                    var $tab_content = $tabs.find('.resp-tab-content[aria-labelledby="' + label + '"]');
                                                    if ($tab_content.length && $tab_content.css('display') != 'none') {
                                                        var offset = target.offset().top - theme.StickyHeader.sticky_height - theme.adminBarHeight() - 14;
                                                        if (offset < $(window).scrollTop())
                                                            $('html, body').stop().animate({
                                                                scrollTop: offset
                                                            }, 600, 'easeOutQuad');
                                                    }
                                                }, 500);
                                            }

                                            // go to reviews, write a review
                                            $('.woocommerce-review-link, .woocommerce-write-review-link').click(function(e) {
                                                var target = $(this.hash);
                                                if (target.length) {
                                                    e.preventDefault();

                                                    goReviewTab(target);

                                                    return false;
                                                }
                                            });
                                            // Open review form if accessed via anchor
                                            if (window.location.hash == '#review_form' || window.location.hash == '#reviews' || window.location.hash.indexOf('#comment-') != -1) {
                                                var target = $(window.location.hash);
                                                if (target.length) {
                                                    goReviewTab(target);
                                                }
                                            }

                                            $tabs.find('h2.resp-accordion').click(function(e) {
                                                goAccordionTab($(this));
                                            });
                                        });

                                    